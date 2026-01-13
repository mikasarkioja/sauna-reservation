'use client';

import React, { useState, useMemo } from 'react';
import { generateIGScore, IGResult } from '@/lib/investment-logic';

export default function InvestmentGradePage() {
  // State for What-If Simulator
  const [extraReserves, setExtraReserves] = useState(0); // €/m2/mo increase
  const [energyImprovement, setEnergyImprovement] = useState(false);

  // Calculate Real-time Score
  const data: IGResult = useMemo(() => {
    return generateIGScore('merihiekka-1965', { 
        extraReserves, 
        energyImprovement 
    });
  }, [extraReserves, energyImprovement]);

  // Color helpers
  const getGradeColor = (grade: string) => {
    switch (grade) {
        case 'A': return 'text-emerald-400';
        case 'B': return 'text-emerald-300';
        case 'C': return 'text-yellow-400';
        case 'D': return 'text-orange-400';
        case 'E': return 'text-red-500';
        default: return 'text-gray-400';
    }
  };

  const getScoreColor = (score: number) => {
      if (score >= 75) return 'text-emerald-400';
      if (score >= 50) return 'text-yellow-400';
      return 'text-red-500';
  };

  // Radar Chart Data Prep (Normalization to 0-100 is already done in logic)
  const pillars = [
      { name: 'Repair Debt', value: data.pillarScores.repairDebt, fullMark: 100 },
      { name: 'Funding', value: data.pillarScores.funding, fullMark: 100 },
      { name: 'Energy', value: data.pillarScores.energy, fullMark: 100 },
      { name: 'Governance', value: data.pillarScores.governance, fullMark: 100 },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-mono">
      {/* Header */}
      <div className="flex justify-between items-end mb-8 border-b border-slate-700 pb-4">
        <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">BUILDING INVESTMENT GRADE</h1>
            <p className="text-slate-400 mt-1">Asunto Oy Itä-Helsingin Merihiekka (1965)</p>
        </div>
        <div className="text-right">
            <div className="text-xs text-slate-500 uppercase tracking-wider">Analysis Date</div>
            <div className="text-lg">{(new Date()).toLocaleDateString('fi-FI')}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: GRADE CARD & RADAR */}
        <div className="space-y-8">
            {/* GRADE CARD */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 3.8L18.2 19H5.8L12 5.8z"/></svg>
                </div>
                
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">Overall Grade</h2>
                
                <div className="flex items-center justify-center py-8">
                    <span className={`text-9xl font-black ${getGradeColor(data.grade)} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] animate-pulse`}>
                        {data.grade}
                    </span>
                </div>
                
                <div className="flex justify-between items-center border-t border-slate-700 pt-4 mt-4">
                    <span className="text-slate-400">Score</span>
                    <span className={`text-2xl font-bold ${getScoreColor(data.score)}`}>{data.score}/100</span>
                </div>
            </div>

            {/* RADAR CHART (SVG Implementation) */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Financial Health Radar</h3>
                <div className="relative w-full aspect-square max-w-[300px] mx-auto">
                    {/* Background Circles */}
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                        {[20, 40, 60, 80, 100].map(r => (
                            <circle key={r} cx="50" cy="50" r={r/2} fill="none" stroke="#334155" strokeWidth="0.5" />
                        ))}
                        
                        {/* Axes */}
                        <line x1="50" y1="50" x2="50" y2="0" stroke="#334155" strokeWidth="0.5" />
                        <line x1="50" y1="50" x2="100" y2="50" stroke="#334155" strokeWidth="0.5" />
                        <line x1="50" y1="50" x2="50" y2="100" stroke="#334155" strokeWidth="0.5" />
                        <line x1="50" y1="50" x2="0" y2="50" stroke="#334155" strokeWidth="0.5" />

                        {/* Data Polygon */}
                        {/* 
                           Top: Repair Debt (y=0)
                           Right: Funding (x=100)
                           Bottom: Energy (y=100)
                           Left: Governance (x=0)
                        */}
                        <polygon 
                            points={`
                                50,${50 - (data.pillarScores.repairDebt / 2)} 
                                ${50 + (data.pillarScores.funding / 2)},50 
                                50,${50 + (data.pillarScores.energy / 2)} 
                                ${50 - (data.pillarScores.governance / 2)},50
                            `}
                            fill="rgba(16, 185, 129, 0.2)"
                            stroke="#10b981"
                            strokeWidth="2"
                        />
                    </svg>
                    
                    {/* Labels */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6 text-xs text-emerald-400 font-bold">Repair Debt</div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-8 text-xs text-blue-400 font-bold">Funding</div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-6 text-xs text-yellow-400 font-bold">Energy</div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-10 text-xs text-purple-400 font-bold">Governance</div>
                </div>
            </div>
        </div>

        {/* MIDDLE COLUMN: PILLAR DETAILS */}
        <div className="space-y-6 lg:col-span-2">
            
            {/* PILLAR BREAKDOWN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pillars.map((pillar) => (
                    <div key={pillar.name} className="bg-slate-800 p-5 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-400 text-sm uppercase">{pillar.name}</span>
                            <span className={`font-bold ${getScoreColor(pillar.value)}`}>{pillar.value}</span>
                        </div>
                        <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                            <div 
                                className={`h-full rounded-full transition-all duration-500 ${
                                    pillar.value >= 75 ? 'bg-emerald-500' : pillar.value >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                                }`} 
                                style={{ width: `${pillar.value}%` }} 
                            />
                        </div>
                        <p className="text-xs text-slate-500 mt-3">
                            {pillar.name === 'Repair Debt' && "Based on Pipe (1965) & Facade (Original) technical life."}
                            {pillar.name === 'Funding' && "Current reserves vs. Estimated future liability."}
                            {pillar.name === 'Energy' && "Energy Class F. Heavy reliance on district heating."}
                            {pillar.name === 'Governance' && "PTS plan exists. Audits clean."}
                        </p>
                    </div>
                ))}
            </div>

            {/* WHAT-IF SIMULATOR */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                 <div className="flex items-center space-x-2 mb-6">
                    <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                    <h3 className="text-lg font-bold text-white">What-If Simulator</h3>
                 </div>
                 
                 <div className="space-y-8">
                    {/* Slider: Reserves */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-slate-300">Increase Hoitovastike (Reserves)</label>
                            <span className="text-blue-400 font-bold">+{extraReserves.toFixed(2)} €/m²/mo</span>
                        </div>
                        <input 
                            type="range" 
                            min="0" max="2" step="0.1"
                            value={extraReserves}
                            onChange={(e) => setExtraReserves(parseFloat(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                        <p className="text-xs text-slate-500 mt-2">Collecting more reserves improves the 'Funding' pillar.</p>
                    </div>

                    {/* Toggle: Energy Project */}
                    <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                        <div>
                            <div className="text-slate-200 font-medium">Approve Energy Renovation</div>
                            <div className="text-xs text-slate-400">Geothermal + Solar (Investment ~600k€)</div>
                        </div>
                        <button 
                            onClick={() => setEnergyImprovement(!energyImprovement)}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                                energyImprovement 
                                    ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                                    : 'bg-slate-600 text-slate-300 hover:bg-slate-500'
                            }`}
                        >
                            {energyImprovement ? 'APPROVED' : 'OFF'}
                        </button>
                    </div>
                 </div>

                 {/* Simulated Impact Box */}
                 <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                    <h4 className="text-blue-400 text-sm font-bold uppercase mb-2">AI Recommendation</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        {data.recommendation}
                    </p>
                 </div>
            </div>

            {/* EXPORT BUTTON */}
            <div className="text-right">
                <button 
                    disabled={data.score < 75}
                    className={`px-6 py-3 rounded-lg font-bold flex items-center justify-center w-full md:w-auto ml-auto gap-2 transition-all ${
                        data.score >= 75 
                            ? 'bg-white text-slate-900 hover:bg-slate-200 shadow-lg' 
                            : 'bg-slate-700 text-slate-500 cursor-not-allowed opacity-50'
                    }`}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    {data.score >= 75 ? 'Download Bank-Ready Report (PDF)' : 'Score too low for Bank Report'}
                </button>
                {data.score >= 75 && (
                    <p className="text-xs text-emerald-400 mt-2 text-right">✓ Eligible for Green Finance</p>
                )}
            </div>

        </div>
      </div>
    </div>
  );
}
