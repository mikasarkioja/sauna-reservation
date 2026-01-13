import { PrismaClient } from '@prisma/client';

/**
 * Mock Service for "Maanmittauslaitos" (National Land Survey of Finland) Data Sync.
 * In production, this would connect to the MML/Huoneistotietojärjestelmä API.
 */

export interface MMLBuildingData {
  businessId: string;
  name: string;
  constructionYear: number;
  totalAreaM2: number;
  apartmentCount: number;
  address: string;
}

// Mock Database of MML records
const MML_REGISTRY: Record<string, MMLBuildingData> = {
  '1234567-8': {
    businessId: '1234567-8',
    name: 'Asunto Oy Itä-Helsingin Merihiekka',
    constructionYear: 1965,
    totalAreaM2: 4800,
    apartmentCount: 72,
    address: 'Hiekkakatu 1, 00980 Helsinki'
  },
  '9876543-2': {
    businessId: '9876543-2',
    name: 'Asunto Oy Esimerkki',
    constructionYear: 1980,
    totalAreaM2: 2500,
    apartmentCount: 30,
    address: 'Mallitie 5, 00100 Helsinki'
  }
};

/**
 * Fetches official building data from the National Land Survey registry by Business ID (Y-tunnus).
 */
export async function syncBuildingData(businessId: string): Promise<MMLBuildingData | null> {
  console.log(`[MML Sync] Fetching data for Y-tunnus: ${businessId}...`);
  
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 800));

  const data = MML_REGISTRY[businessId];
  
  if (!data) {
    console.warn(`[MML Sync] No data found for ${businessId}`);
    return null;
  }

  console.log(`[MML Sync] Found: ${data.name} (${data.constructionYear})`);
  return data;
}

/**
 * Verifies if the Housing Company share count matches the official registry.
 * Critical for verifying loan collateral value.
 */
export async function verifyShareCount(businessId: string, claimedShares: number): Promise<boolean> {
  const data = await syncBuildingData(businessId);
  if (!data) return false;

  // In this mock, we assume shares ~= m2 for simplicity, or we store exact shares in a real DB.
  // Let's assume the registry tracks m2 as the primary metric for our logic.
  // Validation: Claimed area/shares should be within 1% of official record.
  const diff = Math.abs(data.totalAreaM2 - claimedShares);
  const isValid = diff < (data.totalAreaM2 * 0.01);
  
  console.log(`[MML Sync] Share Verification: Claimed ${claimedShares} vs Registry ${data.totalAreaM2}. Valid: ${isValid}`);
  
  return isValid;
}
