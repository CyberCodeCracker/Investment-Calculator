export interface ResultModel {
  index: number,
  year: string,
  initialInvestment: number,
  totalInvestment: number,
  totalInterest: string,
  investmentValue: string,
  isTargetReached?: boolean
}