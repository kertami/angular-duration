import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {

  value = 0;


  constructor() { }

  ngOnInit() {
  }

  valueChangeEvent(event: any) {
    console.log(event);
    this.value = 1;
  }
}
