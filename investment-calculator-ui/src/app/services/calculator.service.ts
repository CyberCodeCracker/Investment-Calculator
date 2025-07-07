import { Injectable } from '@angular/core';
import { CalculatorModel } from '../models/calculator.model';
import { ResultModel } from '../models/result.model';

@Injectable({ providedIn: 'root' })
export class CalculatorService {

  calculateReturns(calculator: CalculatorModel): ResultModel[] {
    const annualData: ResultModel[] = [];

    const annualInvestment = calculator.annualInvestment;
    const earningPercentage = calculator.approximateEarningPercentage / 100;
    const initialYear = parseInt(calculator.startingDate.split('-')[0], 10);

    let investmentValue = calculator.initialInvestment;

    for (let i = 0; i < calculator.duration; i++) {
      const index = i + 1;
      const year = initialYear + i;

      investmentValue += annualInvestment;

      const interestEarnedInYear = investmentValue * earningPercentage;
      investmentValue += interestEarnedInYear;

      const totalInvestment = calculator.initialInvestment + annualInvestment * index;
      const totalInterest = investmentValue - totalInvestment;

      const isTargetReached = investmentValue >= calculator.expectedReturn;


      annualData.push({
        index: index,
        year: year.toString(),
        initialInvestment: calculator.initialInvestment,
        totalInvestment: totalInvestment,
        totalInterest: totalInterest.toFixed(2),
        investmentValue: investmentValue.toFixed(2),
        isTargetReached: isTargetReached
      });
    }

    return annualData;
  }
}
