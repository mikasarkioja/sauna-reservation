'use client';

import React, { useState, useMemo } from 'react';

// Types for our graph data
type YearlyData = {
  year: number;
  cost: number;
  cumulative: number;
  events?: string[];
  maintenanceCost: number; // Regular maintenance (huoltokulut)
  energyCost: number;
  repairCost: number; // One-off repairs/renovations
};

type ScenarioType = 'REACTIVE' | 'PROACTIVE' | 'OPTIMIZED';

export default function ScenariosPage() {
  const [activeScenario, setActiveScenario] = useState<ScenarioType>('REACTIVE');

  // Simulation Constants for "Asunto Oy Itä-Helsingin Merihiekka" (Built 1965)
  // 72 Apartments, ~4800 m2.
  const START_YEAR = 2026;
  const YEARS = 20;
  
  // Baseline Costs (2026 levels)
  // District Heating: ~45-50k€/year for this size (F-class energy)
  const BASE_ENERGY_COST = 48000; 
  // Maintenance (Huolto, isännöinti, siivous, etc.): ~5€/m2/mo = ~24k/mo?? No, usually 4-5€/m2/mo is Hoitovastike total.
  // Let's say maintenance excluding energy is ~100k€/year.
  const BASE_MAINTENANCE_COST = 100000;

  // Scenario Configurations
  const getScenarioData = (type: ScenarioType): YearlyData[] => {
    let cumulative = 0;
    const data: YearlyData[] = [];

    // Inflation assumptions
    const INFLATION_ENERGY = 1.03; // 3% p.a.
    const INFLATION_MAINT = 1.02;  // 2% p.a.
    const INFLATION_CONSTRUCTION = 1.025; // 2.5% p.a.

    for (let i = 0; i < YEARS; i++) {
      const year = START_YEAR + i;
      let repairCost = 0;
      let energyCost = BASE_ENERGY_COST * Math.pow(INFLATION_ENERGY, i);
      let maintenanceCost = BASE_MAINTENANCE_COST * Math.pow(INFLATION_MAINT, i);
      
      const events: string[] = [];

      // Construction Cost Index multiplier for future repairs
      const constructionIndex = Math.pow(INFLATION_CONSTRUCTION, i);

      if (type === 'REACTIVE') {
        // SCENARIO A: "Korjausvelkapommi" (Repair Debt Bomb)
        // Delay everything until it breaks.
        
        // 2027: Heat Exchanger Fails (Emergency) - 62 yrs old system
        if (year === 2027) {
          repairCost += 25000 * constructionIndex; 
          events.push('Heat Exchanger Failure');
        }

        // 2029: Roof Leaks Severe (Patching not enough)
        if (year === 2029) {
          repairCost += 60000 * constructionIndex; // Emergency patching + drying
          events.push('Major Roof Leak');
        }

        // 2030: Pipe leaks start -> Insurance costs rise
        if (year >= 2030 && year < 2033) {
           maintenanceCost += 10000; // Deductibles and investigation costs
        }

        // 2033: FORCED PIPE RENOVATION (Traditional, expensive due to urgency & damage)
        // 1000€/m2 (panic price) * 4800m2 = 4.8M€
        if (year === 2033) {
          repairCost += 1000 * 4800 * constructionIndex;
          events.push('Urgent Pipe Renovation');
        }

      } else if (type === 'PROACTIVE') {
        // SCENARIO B: "PTS-suunnitelma" (Planned)
        // Do things on time. 
        
        // 2026: Condition Surveys (Pipes, Roof, Facade)
        if (year === 2026) {
          repairCost += 15000;
          events.push('Condition Surveys');
        }

        // 2028: Roof Renovation (Planned)
        // ~100€/m2 = 480k€
        if (year === 2028) {
          repairCost += 100 * 4800 * constructionIndex;
          events.push('Roof Renovation');
        }

        // 2030: Pipe Renovation (Planned, Traditional)
        // ~850€/m2 (Good market price) = 4.08M€
        if (year === 2030) {
          repairCost += 850 * 4800 * constructionIndex;
          events.push('Pipe Renovation (LVI)');
        }

        // 2035: Facade & Windows Maintenance
        if (year === 2035) {
          repairCost += 150000 * constructionIndex;
          events.push('Facade Maint.');
        }

      } else if (type === 'OPTIMIZED') {
        // SCENARIO C: "Energiaremontti & Synergia" (Modernized)
        
        // 2027: Planning for GROUP RENOVATION
        if (year === 2027) {
          repairCost += 40000;
          events.push('Project Planning');
        }

        // 2028: THE BIG ONE (Geothermal + LTO + Pipes + Solar + Smart Control)
        if (year === 2028) {
          // Pipes: 850€/m2 -> Synergy with Energy works (shared technical room work) -> 800€/m2
          const pipeCost = 800 * 4800; 
          
          // Energy Investment (Geothermal + LTO + Solar): ~600k€
          const energyInvestment = 600000;
          
          // Roof Solar ready (part of energy inv) but we fix roof same time
          // Roof cost: 100€/m2 -> Shared logistics/scaffolding -> 85€/m2
          const roofCost = 85 * 4800;

          repairCost += (pipeCost + energyInvestment + roofCost) * constructionIndex;
          events.push('Group Renovation (LVI+Energy+Roof)');
        }

        // SAVINGS KICK IN (from 2029)
        // Geothermal + LTO drops heating bill by ~65-70%
        // Solar drops electricity bill
        if (year >= 2029) {
          energyCost = energyCost * 0.35; // 65% savings
        }

        // 2035: Facade (Still needed, but maybe postpone-able if funds used on energy?)
        // Let's say we do it, normal price
        if (year === 2035) {
           repairCost += 150000 * constructionIndex;
           events.push('Facade Maint.');
        }
      }

      const totalYearly = repairCost + energyCost + maintenanceCost;
      cumulative += totalYearly;

      data.push({
        year,
        cost: totalYearly,
        cumulative,
        events: events.length > 0 ? events : undefined,
        maintenanceCost,
        energyCost,
        repairCost
      });
    }

    return data;
  };

  const currentData = useMemo(() => getScenarioData(activeScenario), [activeScenario]);
  
  // Calculate max cumulative for scaling (find max across all scenarios to keep scale constant-ish or just self-scale)
  // For a fair visual comparison, the scale should be fixed to the WORST CASE scenario max.
  const worstCaseMax = useMemo(() => {
    const reactive = getScenarioData('REACTIVE');
    return reactive[reactive.length - 1].cumulative;
  }, []); // Only calc once

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header & Context */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h1 className="text-3xl font-bold">PTS & Financial Scenarios</h1>
           <p className="text-gray-500 mt-1">Simulation for: <span className="font-semibold text-gray-800">Asunto Oy Itä-Helsingin Merihiekka</span> (Built 1965, 72 apts)</p>
        </div>
        
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
          {(['REACTIVE', 'PROACTIVE', 'OPTIMIZED'] as ScenarioType[]).map((s) => (
            <button
              key={s}
              onClick={() => setActiveScenario(s)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeScenario === s 
                  ? 'bg-white shadow-sm text-blue-600 border border-gray-200' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {s.charAt(0) + s.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Building Stats Card */}
      <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
            <span className="block text-gray-500">Living Area</span>
            <span className="font-semibold">4,800 m²</span>
        </div>
        <div>
            <span className="block text-gray-500">Heating</span>
            <span className="font-semibold">District Heating (orig.)</span>
        </div>
        <div>
            <span className="block text-gray-500">Ventilation</span>
            <span className="font-semibold">Mech. Exhaust (orig.)</span>
        </div>
        <div>
            <span className="block text-gray-500">Pipe Status</span>
            <span className="font-semibold text-red-600">Original (Risk!)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Total 20y Cost (Cumulative)</h3>
          <p className="text-4xl font-bold mt-2 text-gray-900">
            {(currentData[currentData.length - 1].cumulative / 1000000).toFixed(2)} M€
          </p>
          <p className="text-sm text-gray-400 mt-1">
             Approx. {((currentData[currentData.length - 1].cumulative / 4800 / 20 / 12)).toFixed(2)} €/m²/mo avg
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border shadow-sm col-span-2">
           <h3 className="text-gray-500 text-sm font-medium mb-2">Strategy Overview</h3>
           {activeScenario === 'REACTIVE' && (
             <div>
                <h4 className="font-semibold text-red-600">Scenario A: "Repair Debt Bomb"</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Delaying renovations leads to compounding problems. Emergency repairs (leaking heat exchanger, roof) 
                  drain the buffer. The inevitable Pipe Renovation in 2033 is done under duress (leaks started), 
                  costing significantly more due to urgency and water damage remediation.
                </p>
             </div>
           )}
           {activeScenario === 'PROACTIVE' && (
             <div>
                <h4 className="font-semibold text-blue-600">Scenario B: "Traditional PTS Plan"</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Projects are timed according to technical lifespans. Roof is renewed before it leaks (2028). 
                  Pipe Renovation (Linjasaneeraus) is done in 2030 in a controlled manner. 
                  Costs are high but predictable. Property value is maintained.
                </p>
             </div>
           )}
           {activeScenario === 'OPTIMIZED' && (
             <div>
                <h4 className="font-semibold text-emerald-600">Scenario C: "Smart Energy & Synergy"</h4>
                <p className="text-sm text-gray-600 mt-1">
                  We combine the heavy Pipe Renovation with a massive Energy Retrofit (Geothermal + Recovery) in 2028.
                  Although the investment spike is highest, the **65% drop in heating costs** pays back the energy loan.
                  The total 20-year cost is lower than the Reactive model, with a fully modernized building.
                </p>
             </div>
           )}
        </div>
      </div>

      {/* GRAPH SECTION */}
      <div className="bg-white p-6 rounded-xl border shadow-sm h-[500px] relative flex flex-col">
        <h3 className="text-lg font-semibold mb-6">Cumulative Cost Projection (2026 - 2046)</h3>
        
        <div className="flex-grow w-full relative">
          <svg className="w-full h-full overflow-visible" viewBox={`0 0 ${YEARS * 40} 300`} preserveAspectRatio="none">
             {/* Grid lines & Y-Axis Labels */}
             {[0, 1, 2, 3, 4, 5].map(i => (
               <g key={i}>
                 <line 
                   x1="0" y1={300 - (i * 60)} x2={YEARS * 40} y2={300 - (i * 60)} 
                   stroke="#f3f4f6" strokeWidth="1" 
                 />
                 <text x="-10" y={300 - (i * 60) + 5} fontSize="10" fill="#9ca3af" textAnchor="end">
                   {(worstCaseMax * (i/5) / 1000000).toFixed(1)} M€
                 </text>
               </g>
             ))}

             {/* The Line */}
             <polyline
                fill="none"
                stroke={
                  activeScenario === 'REACTIVE' ? '#ef4444' : 
                  activeScenario === 'PROACTIVE' ? '#3b82f6' : 
                  '#10b981'
                }
                strokeWidth="3"
                points={currentData.map((d, i) => {
                  const x = i * 40;
                  const y = 300 - (d.cumulative / worstCaseMax) * 300; 
                  return `${x},${y}`;
                }).join(' ')}
             />

             {/* Dots for Events */}
             {currentData.map((d, i) => {
                if (!d.events) return null;
                const x = i * 40;
                const y = 300 - (d.cumulative / worstCaseMax) * 300;
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r="4" fill="white" stroke="#6b7280" strokeWidth="2" />
                    <text x={x} y={y - 10} fontSize="10" textAnchor="middle" fill="#1f2937" fontWeight="bold">
                      {d.events[0]}
                    </text>
                    {d.events.length > 1 && (
                      <text x={x} y={y - 22} fontSize="9" textAnchor="middle" fill="#4b5563">
                        + {d.events.length - 1} more
                      </text>
                    )}
                  </g>
                );
             })}
          </svg>
          
          {/* X-Axis Labels */}
          <div className="absolute bottom-[-30px] left-0 w-full flex justify-between text-xs text-gray-400 px-2">
             {currentData.filter((_, i) => i % 5 === 0).map((d) => (
                <span key={d.year}>{d.year}</span>
             ))}
             <span>{START_YEAR + YEARS - 1}</span>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-sm text-amber-800">
        <strong>Note:</strong> This simulation uses inflation data (3% Energy, 2.5% Construction) and market prices for 2026. 
        "Reactive" assumes higher costs for emergency repairs due to lack of competitive bidding and additional damage mitigation.
      </div>
    </div>
  );
}
