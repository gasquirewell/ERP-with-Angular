import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.scss']
})
export class TempConverterComponent implements OnInit {

  farenheit = 0;
  celcius = 0;

  constructor() { }

  ngOnInit(): void {
  }

  convertToF() {
    // (0c x 9/5) + 32 = 32f
    this.farenheit = (this.celcius * 9/5) + 32;
  }

  convertToC() {
    this.celcius = (this.farenheit - 32) *(5/9);
  }

}
