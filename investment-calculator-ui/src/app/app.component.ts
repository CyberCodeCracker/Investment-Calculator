import { Component } from '@angular/core';
import { ResultModel } from './models/result.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'investment-calculator-ui';

  results: ResultModel[] = [];

  handleResults(data: ResultModel[]) {
    this.results = data;
    console.log("results received", this.results);
  }
}
