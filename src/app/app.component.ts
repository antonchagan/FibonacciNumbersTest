import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  fibonacciSeries: Array<number> = [];
  number: number;
  numberLetter: number;
  string: string;
  letter: string;

  ngOnInit() {
  }

  public definitionSeries(n: number) {
    if (n === 1) {
      return this.fibonacciSeries = [0, 1];
    } else {
      let recursion = this.definitionSeries(n - 1);
      recursion.push(recursion[recursion.length - 1] + recursion[recursion.length - 2]);
      return this.fibonacciSeries = recursion;
    }
  }

  public countNumber(s: string , l: string) {
    return this.numberLetter = (s.split(l).length - 1);
  }
}
