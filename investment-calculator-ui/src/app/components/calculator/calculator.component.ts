import { Component, EventEmitter, Output } from '@angular/core';
import { CalculatorModel } from 'src/app/models/calculator.model';
import { ResultModel } from 'src/app/models/result.model';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  @Output() resultCalculated = new EventEmitter<ResultModel[]>()

  constructor(private calculatorService: CalculatorService) {
    this.calculatorService = calculatorService;
  }

  calculator!: CalculatorModel;

  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;
  startingDate = '';
  approximateEarningPercentage = 0;

  onSubmitForm() {
    
    console.log("Form submit works!");
    this.calculator = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
      startingDate: this.startingDate,
      approximateEarningPercentage: this.approximateEarningPercentage
    };
    const results = this.calculatorService.calculateReturns(this.calculator);
    console.log(results);
    this.resultCalculated.emit(results);
  }
}
