import { generateIGScore, IGResult } from './investment-logic';

export interface LoanPacket {
  applicationId: string;
  projectId: string;
  amountRequested: number;
  companyDetails: {
    businessId: string;
    name: string;
    shareCount: number;
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

// Mock Database State for Simulation
const MOCK_COMPANY_DETAILS = {
  businessId: '1234567-8',
  name: 'Asunto Oy Itä-Helsingin Merihiekka',
  shareCount: 4800, // Using m2 as shares for simplicity
};

/**
 * 1. Generate Loan Packet
 * Aggregates all necessary data for the bank application.
 */
export async function generateLoanPacket(
  projectId: string, 
  amountRequested: number,
  projectType: 'TRADITIONAL' | 'ENERGY_EFFICIENCY'
): Promise<LoanPacket> {
  
  // 1. Fetch Investment Grade Report (Real-time)
  // We use our existing logic engine.
  const igReport = generateIGScore('merihiekka-1965', { 
    energyImprovement: projectType === 'ENERGY_EFFICIENCY' 
  });

  // 2. Mock fetching signed minutes
  const boardMinutesSigned = true; 

  // 3. Construct Packet
  return {
    applicationId: `APP-${Date.now()}`,
    projectId,
    amountRequested,
    companyDetails: MOCK_COMPANY_DETAILS,
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
