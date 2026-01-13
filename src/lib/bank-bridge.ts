import { generateIGScore, IGResult } from './investment-logic';
import { syncBuildingData, verifyShareCount } from './mml-sync';

// Types aligning with Prisma models (but decoupled for this logic module)
export interface LoanPacket {
  applicationId: string;
  projectId: string;
  amountRequested: number;
  companyDetails: {
    businessId: string;
    name: string;
    shareCount: number;
    officialRegistryVerified: boolean;
  };
  financialHealth: IGResult;
  boardMinutesSigned: boolean;
  projectType: 'TRADITIONAL' | 'ENERGY_EFFICIENCY';
}

export interface BankOffer {
  bankName: string;
  margin: number;       // %
  referenceRate: string; // e.g. "Euribor 12kk"
  termYears: number;
  monthlyPayment: number;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

// Mock Data for "Yhtiökokous" Minutes check
// In a real app, we'd query prisma.document.findFirst({ where: { renovationProjectId: ..., type: 'MEETING_MINUTES' } })
const MOCK_DOCUMENT_REGISTRY: Record<string, boolean> = {
  'proj_1': true, // Has signed minutes
  'proj_2': true,
};

/**
 * 1. Generate Loan Packet
 * Aggregates all necessary data for the bank application.
 */
export async function generateLoanPacket(
  projectId: string, 
  amountRequested: number,
  projectType: 'TRADITIONAL' | 'ENERGY_EFFICIENCY',
  businessId: string = '1234567-8' // Default for demo
): Promise<LoanPacket> {
  
  // 1. Fetch Investment Grade Report (Real-time)
  const igReport = generateIGScore('merihiekka-1965', { 
    energyImprovement: projectType === 'ENERGY_EFFICIENCY' 
  });

  // 2. MML Sync: Fetch official building data
  const mmlData = await syncBuildingData(businessId);
  if (!mmlData) throw new Error("Building not found in MML Registry");

  // 3. Document Check: Ensure Board Minutes are Signed
  // We check if the project has a 'MEETING_MINUTES' document that isSigned.
  const boardMinutesSigned = MOCK_DOCUMENT_REGISTRY[projectId] || false;

  // 4. Construct Packet
  return {
    applicationId: `APP-${Date.now()}`,
    projectId,
    amountRequested,
    companyDetails: {
        businessId: mmlData.businessId,
        name: mmlData.name,
        shareCount: mmlData.totalAreaM2, // Using area as proxy for shares in this demo
        officialRegistryVerified: true
    },
    financialHealth: igReport,
    boardMinutesSigned,
    projectType
  };
}

/**
 * 2. Submit to Bank API (Mock)
 * Simulates calling OP/Nordea/Danske APIs.
 */
export async function submitToBankAPI(packet: LoanPacket, bankId: 'OP' | 'NORDEA' | 'DANSKE'): Promise<BankOffer> {
  console.log(`[BankBridge] Submitting application ${packet.applicationId} to ${bankId}...`);
  console.log(`[BankBridge] Green Loan Status: ${packet.projectType === 'ENERGY_EFFICIENCY'}`);

  // Simulate Network Latency
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Base Margin Logic
  let baseMargin = 0.85; // Standard strong housing company
  
  // Risk Adjustments based on IG Grade
  if (packet.financialHealth.grade === 'C') baseMargin += 0.15;
  if (packet.financialHealth.grade === 'D') baseMargin += 0.40;
  if (packet.financialHealth.grade === 'E') baseMargin += 0.80;

  // Green Loan Discount
  if (packet.projectType === 'ENERGY_EFFICIENCY') {
    baseMargin -= 0.20; // Green discount
    console.log(`[BankBridge] Applied Green Loan Discount (-0.20%)`);
  }

  // Bank Specific Variances
  if (bankId === 'OP') baseMargin -= 0.05; // Competitive
  if (bankId === 'DANSKE') baseMargin += 0.05; // Conservative

  // Calculate Monthly Payment (Annuity estimation)
  const rate = (baseMargin + 3.5) / 100 / 12; // 3.5% Euribor assumed
  const term = 20 * 12;
  const payment = packet.amountRequested * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);

  return {
    bankName: bankId,
    margin: parseFloat(baseMargin.toFixed(2)),
    referenceRate: 'Euribor 12kk',
    termYears: 20,
    monthlyPayment: payment,
    status: 'APPROVED'
  };
}

/**
 * 3. Security: BankID Verification (Mock)
 */
export async function verifyBoardChair(ssn: string): Promise<boolean> {
  // In reality, this redirects to Tunnistus-service (Visma Sign / Nets)
  console.log(`[Security] Verifying identity via Finnish BankID...`);
  await new Promise(resolve => setTimeout(resolve, 800));
  return true; 
}
