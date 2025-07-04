import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './src/app/components/header/header.component';
import { CalculatorInterfaceComponent } from './components/calculator-interface/calculator-interface.component';
import { ResultComponent } from './components/result/result.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculatorInterfaceComponent,
    ResultComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
