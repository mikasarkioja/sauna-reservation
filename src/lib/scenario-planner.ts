import { PrismaClient } from '@prisma/client';

// Mock Data for "Finnish Construction Cost Index" (2015=100 as base example)
const CONSTRUCTION_COST_INDEX: Record<number, number> = {
  2010: 92.5,
  2015: 100.0,
  2020: 105.2,
  2021: 109.5,
  2022: 115.0,
  2023: 112.0, // Correction
  2024: 114.0,
  2025: 116.0, // Forecast
  2026: 118.5,
};

// Mock KH-kortti technical lifespans (years)
export const KH_KORTTI_LIFESPANS: Record<string, number> = {
  'Roof': 40,
  'Plumbing': 50,
  'Facade': 30,
  'Windows': 30,
  'Elevator': 25,
  'Sauna': 15,
};

// Mock Project Interface (since it's not in Prisma schema yet)
export interface PTSProject {
  id: string;
  name: string;
  category: string;
  year: number;
  cost?: number; // If manually set
  buildingM2: number;
  status: 'PLANNED' | 'CONFIRMED';
}

// Mock Database of Projects for calculation context
export const MOCK_PROJECTS: PTSProject[] = [
  { id: 'p1', name: 'Roof Renovation', category: 'Roof', year: 2026, buildingM2: 2000, status: 'PLANNED' },
  { id: 'p2', name: 'Facade Painting', category: 'Facade', year: 2026, buildingM2: 2000, status: 'PLANNED' }, // Overlap with Roof
  { id: 'p3', name: 'Pipe Renovation', category: 'Plumbing', year: 2030, buildingM2: 2000, status: 'PLANNED' },
];

// Mock Unit Prices if DB is empty
const MOCK_UNIT_PRICES: Record<string, number> = {
  'Roof': 150,    // €/m2
  'Facade': 100,
  'Plumbing': 800,
  'Windows': 200,
  'Sauna': 500,
};

/**
 * Deflates current unitPriceM2 using the 'Finnish Construction Cost Index'.
 * Returns the estimated cost in the target historical year.
 */
export function estimateHistoricalCost(
  category: string,
  targetYear: number,
  buildingM2: number,
  currentUnitPriceM2?: number
): number {
  const currentYear = new Date().getFullYear();
  const basePrice = currentUnitPriceM2 || MOCK_UNIT_PRICES[category] || 0;
  
  const currentIndex = CONSTRUCTION_COST_INDEX[currentYear] || 120; // Default fallback
  const targetIndex = CONSTRUCTION_COST_INDEX[targetYear] || 100; // Default fallback
  
  // Formula: Price_target = Price_current * (Index_target / Index_current)
  const adjustedUnitTest = basePrice * (targetIndex / currentIndex);
  
  return adjustedUnitTest * buildingM2;
}

/**
 * Forecasts the cost of a PTS project.
 * - Uses category unit price * m2 if cost is not set.
 * - Applies 'Synergy Discount' if overlapping projects exist in the same year.
 */
export async function forecastPTSCost(projectId: string): Promise<number> {
  const project = MOCK_PROJECTS.find(p => p.id === projectId);
  if (!project) throw new Error(`Project ${projectId} not found`);

  // 1. Determine Base Cost
  let baseCost = project.cost;
  if (baseCost === undefined || baseCost === null) {
    // In a real app, fetch CostBenchmark from Prisma here.
    // const benchmark = await prisma.costBenchmark.findFirst({ where: { category: project.category } });
    const unitPrice = MOCK_UNIT_PRICES[project.category] || 0;
    baseCost = unitPrice * project.buildingM2;
  }

  // 2. Check for Synergies (Overlap in timing)
  // Synergy: If multiple projects happen in the same year, we save on e.g. scaffolding or establishment costs.
  // Simple logic: If there is ANOTHER project in the same year, apply a 10% discount to this project.
  const overlappingProjects = MOCK_PROJECTS.filter(p => 
    p.year === project.year && p.id !== project.id
  );

  let synergyDiscount = 0;
  if (overlappingProjects.length > 0) {
    // Example: Scaffolding sharing synergy
    // If Roof and Facade are done together, we save.
    const hasScaffoldingSynergy = overlappingProjects.some(p => 
      ['Roof', 'Facade', 'Windows', 'Balconies'].includes(p.category) && 
      ['Roof', 'Facade', 'Windows', 'Balconies'].includes(project.category)
    );

    if (hasScaffoldingSynergy) {
      synergyDiscount = 0.15; // 15% discount
    } else {
      synergyDiscount = 0.05; // 5% general logistics synergy
    }
  }

  return baseCost * (1 - synergyDiscount);
}

// Nord Pool Mock for Energy Price Forecasting
export function getForecastedElectricityPrice(year: number): number {
  // Base price 10 c/kWh, increasing trend
  const yearsFromNow = year - new Date().getFullYear();
  return 10 + (yearsFromNow * 0.5); 
}
