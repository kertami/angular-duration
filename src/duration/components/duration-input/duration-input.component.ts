import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {

  displayValue = 0;

  constructor() { }

  ngOnInit() {
  }

  valueChangeEvent(event: any) {
    console.log(event);
    if (isInsertEvent(event)) {
      this.displayValue = this.displayValue + event.data;
    }
    if (isDeleteEvent(event)) {
      this.displayValue = Math.floor(this.displayValue / 10);
    }
    console.log(this.displayValue);
  }
}

function isInsertEvent(event: any): boolean {

  // inputTypes as defined by mozilla docs https://rawgit.com/w3c/input-events/v1/index.html#interface-InputEvent-Attributes
  const insertEventTypes: string[] = [
    'insertText'
  ];

  return insertEventTypes.includes(event.inputType);
}

function isDeleteEvent(event: any): boolean {

  // inputTypes as defined by mozilla docs https://rawgit.com/w3c/input-events/v1/index.html#interface-InputEvent-Attributes
  const deleteEventTypes: string[] = [
    'deleteContentBackward'
  ];

  return deleteEventTypes.includes(event.inputType);
}
