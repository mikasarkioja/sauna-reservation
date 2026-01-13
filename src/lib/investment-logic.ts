import { PrismaClient } from '@prisma/client';

// Types
export type PillarScores = {
  repairDebt: number; // 40% weight
  funding: number;    // 30% weight
  energy: number;     // 15% weight
  governance: number; // 15% weight
};

export type IGResult = {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
  pillarScores: PillarScores;
  recommendation: string;
};

// Constants based on 'KH-kortti' typical lifespans (years)
const LIFESPANS = {
  PIPES: 50,
  ROOF: 40,
  FACADE: 35,
  WINDOWS: 30,
  ELEVATOR: 25,
};

// Mock Data for "Asunto Oy Itä-Helsingin Merihiekka" if not in DB
const MOCK_COMPANY_DATA = {
  id: 'merihiekka-1965',
  constructionYear: 1965,
  totalAreaM2: 4800,
  renovations: [
    { category: 'ROOF', year: 2028 }, // Planned
    { category: 'WINDOWS', year: 2005 },
    // Pipes are original (1965) -> Risk!
  ]
};

/**
 * Calculates 'Repair Debt' (Korjausvelka).
 * Logic: Compare renovation history against technical lifespans.
 * Value the debt based on current $/m2 construction cost benchmarks.
 */
export function calculateRepairDebt(housingCompanyId: string = 'merihiekka-1965'): { debtAmount: number, debtPerM2: number, score: number } {
  // In a real app, fetch company and renovations from DB
  const company = MOCK_COMPANY_DATA; 
  const currentYear = new Date().getFullYear(); // 2026
  const buildingAge = currentYear - company.constructionYear;

  let totalDebt = 0;

  // 1. PIPES
  // Check if renovated.
  const pipesRenovation = company.renovations.find(r => r.category === 'PIPES');
  const pipesAge = pipesRenovation ? (currentYear - pipesRenovation.year) : buildingAge;
  
  if (pipesAge > LIFESPANS.PIPES) {
    // 100% debt if over lifespan
    totalDebt += 850 * company.totalAreaM2; // 850€/m2 for pipes
  } else if (pipesAge > LIFESPANS.PIPES * 0.8) {
    // 50% debt if nearing end
    totalDebt += 425 * company.totalAreaM2; 
  }

  // 2. ROOF
  const roofRenovation = company.renovations.find(r => r.category === 'ROOF');
  // Note: In our mock, Roof is PLANNED for 2028, so it's not done yet.
  // Ideally we check status. Assuming 'future' means not done.
  const roofDoneYear = roofRenovation && roofRenovation.year <= currentYear ? roofRenovation.year : null;
  const roofAge = roofDoneYear ? (currentYear - roofDoneYear) : buildingAge;

  if (roofAge > LIFESPANS.ROOF) {
     totalDebt += 100 * company.totalAreaM2; // 100€/m2
  }

  // 3. FACADE
  const facadeRenovation = company.renovations.find(r => r.category === 'FACADE');
  const facadeAge = facadeRenovation ? (currentYear - facadeRenovation.year) : buildingAge;
  
  if (facadeAge > LIFESPANS.FACADE) {
      totalDebt += 150 * company.totalAreaM2;
  }

  const debtPerM2 = totalDebt / company.totalAreaM2;

  // Score Calculation (0-100)
  // 0€ debt = 100 pts. > 500€/m2 debt = 0 pts.
  let score = 100 - (debtPerM2 / 5); 
  if (score < 0) score = 0;

  return { debtAmount: totalDebt, debtPerM2, score };
}

/**
 * Generates the Investment Grade Score based on 4 pillars.
 * 40% Repair Debt | 30% Funding | 15% Energy | 15% Governance
 */
export function generateIGScore(
  housingCompanyId: string, 
  simulationParams?: { 
    extraReserves?: number, // €/m2/mo
    energyImprovement?: boolean 
  }
): IGResult {
  
  // 1. Repair Debt Pillar (40%)
  const repairDebtAnalysis = calculateRepairDebt(housingCompanyId);
  const repairScore = repairDebtAnalysis.score;

  // 2. Funding Pillar (30%)
  // Logic: Do they have reserves? Is maintenance fee (hoitovastike) adequate?
  // Mock: Assume 4€/m2/mo current. 
  let currentReserves = 0.5; // €/m2 accumulated
  if (simulationParams?.extraReserves) {
    currentReserves += simulationParams.extraReserves * 12; // Add a year's worth
  }
  
  // Score: Target is > 5€/m2 buffer? Or sustainable vastike?
  // Let's keep it simple: Low Repair Debt usually means High Funding needed OR High Reserves.
  // If Debt is high, Funding Score is low unless Reserves are HUGE.
  let fundingScore = 50; // Baseline 'C'
  if (repairDebtAnalysis.debtPerM2 > 200) {
      fundingScore = 30; // High debt, risky funding
  }
  if (simulationParams?.extraReserves && simulationParams.extraReserves > 0.5) {
      fundingScore += 20; // Improved by collecting more
  }
  if (fundingScore > 100) fundingScore = 100;

  // 3. Energy Pillar (15%)
  // Class F = 40 pts. Class C = 70 pts. Class A = 100 pts.
  let energyScore = 40; // Default F (1965 building)
  if (simulationParams?.energyImprovement) {
      energyScore = 90; // Geothermal + Solar -> A/B class
  }

  // 4. Governance Pillar (15%)
  // "Is PTS up to date?" "Are audits clean?"
  // Assume generic 'Good'
  const governanceScore = 80;

  // Aggregate
  // 40/30/15/15
  const totalScore = (
    (repairScore * 0.40) +
    (fundingScore * 0.30) +
    (energyScore * 0.15) +
    (governanceScore * 0.15)
  );

  // Determine Grade
  let grade: IGResult['grade'] = 'E';
  if (totalScore >= 90) grade = 'A';
  else if (totalScore >= 75) grade = 'B';
  else if (totalScore >= 60) grade = 'C';
  else if (totalScore >= 40) grade = 'D';

  // Recommendation
  let recommendation = "Maintenance levels adequate.";
  if (grade === 'E' || grade === 'D') {
      recommendation = "URGENT: Repair Debt is critical. Plan Renovation immediately.";
  } else if (grade === 'C') {
      recommendation = "Increase reserves by 0.5€/m2 to prepare for upcoming repairs.";
  } else if (grade === 'A' || grade === 'B') {
      recommendation = "Excellent condition. Maintain current PTS.";
  }

  return {
    score: Math.round(totalScore),
    grade,
    pillarScores: {
        repairDebt: Math.round(repairScore),
        funding: Math.round(fundingScore),
        energy: Math.round(energyScore),
        governance: Math.round(governanceScore)
    },
    recommendation
  };
}
