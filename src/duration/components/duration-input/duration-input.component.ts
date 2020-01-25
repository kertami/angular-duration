import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Time } from '@angular/common';
import { DurationMask } from 'src/duration/model/DurationMask';
import { durationMaskOptions } from 'src/duration/model/DurationMaskOption';
import { FormControl } from '@angular/forms';
import { map, debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {

  displayValue = 0;
  durationMask: DurationMask = [durationMaskOptions.hour, durationMaskOptions.minute, durationMaskOptions.second];
  maxDisplayValueLength = this.durationMask.reduce<number>((digitAmount, maskOption) => digitAmount + maskOption.digitAmount, 0);

  dateControl: FormControl;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.dateControl = new FormControl();

    this.dateControl.valueChanges.pipe(
      debounceTime(450),
      tap(input => {
        console.log(`Do stuff with this input: ${input}`);
      })
    ).subscribe();
  }


  pasteEvent(event: any) {
    const pastedText = event.clipboardData.getData('text');
    const numberPattern = /\d+/g;
    this.displayValue = pastedText.match(numberPattern);
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
