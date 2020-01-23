import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Time } from '@angular/common';
import { DurationMask } from 'src/duration/model/DurationMask';
import { durationMaskOptions } from 'src/duration/model/DurationMaskOption';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {

  displayValue = 0;
  durationMask: DurationMask = [durationMaskOptions.hour, durationMaskOptions.minute, durationMaskOptions.second];
  maxDisplayValueLength = this.durationMask.reduce<number>((digitAmount, maskOption) => digitAmount + maskOption.digitAmount, 0);

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

  valueChangeEvent(event: any) {
    if (isInsertEvent(event)) {
      if (this.displayValue.toString().length < this.maxDisplayValueLength) {
        this.displayValue = this.displayValue + event.data;
      }
    }
    if (isDeleteEvent(event)) {
      this.displayValue = Math.floor(this.displayValue / 10);
    }

    this.refreshDisplayValue();
  }

  refreshDisplayValue() {
    ++this.displayValue;
    this.changeDetector.detectChanges();
    --this.displayValue;
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
