/**
 * Calculates the monthly 'Rahoitusvastike' (capital charge) increase per share or m2.
 * 
 * @param loanAmount Total amount of the loan (e.g., for the renovation)
 * @param interestRate Annual interest rate in percentage (e.g., 3.5 for 3.5%)
 * @param termYears Loan term in years
 * @param totalShares Total number of shares or total m2 in the housing company
 * @returns Monthly cost per share/m2
 */
export function calculateVastikeImpact(
  loanAmount: number,
  interestRate: number,
  termYears: number,
  totalShares: number
): number {
  if (totalShares === 0) return 0;
  if (termYears === 0) return loanAmount / totalShares; // Immediate repayment? unlikely but handled.

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = termYears * 12;

  // Standard annuity formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
  // If rate is 0, it's just P / n
  let monthlyPaymentTotal = 0;
  
  if (interestRate === 0) {
    monthlyPaymentTotal = loanAmount / numberOfPayments;
  } else {
    monthlyPaymentTotal = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  }

  return monthlyPaymentTotal / totalShares;
}

/**
 * Sinking Fund logic: Calculate how much to collect NOW monthly to reduce the future loan amount.
 * 
 * @param estimatedProjectCost Total cost of the future project
 * @param targetReductionPercentage How much of the loan we want to avoid taking (e.g., 0.30 for 30%)
 * @param yearsUntilProject Years until the project starts (collecting phase)
 * @param annualReturnRate Expected annual return on the collected funds (e.g. 0.02 for 2%)
 * @param totalShares Total shares/m2 to divide the burden
 * @returns Monthly collection needed per share/m2
 */
export function calculateSinkingFundContribution(
  estimatedProjectCost: number,
  targetReductionPercentage: number,
  yearsUntilProject: number,
  annualReturnRate: number,
  totalShares: number
): number {
  if (yearsUntilProject <= 0) return 0;
  
  const targetAmount = estimatedProjectCost * targetReductionPercentage;
  const monthlyRate = annualReturnRate / 12;
  const months = yearsUntilProject * 12;

  // Future Value of an Annuity formula rearranged to find Payment (PMT):
  // FV = PMT * [((1 + r)^n - 1) / r]
  // PMT = FV * r / ((1 + r)^n - 1)
  
  let monthlyCollectionTotal = 0;

  if (annualReturnRate === 0) {
    monthlyCollectionTotal = targetAmount / months;
  } else {
    monthlyCollectionTotal = targetAmount * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
  }

  return monthlyCollectionTotal / totalShares;
}
