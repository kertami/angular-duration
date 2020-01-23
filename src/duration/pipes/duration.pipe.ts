import { Pipe, PipeTransform } from '@angular/core';
import { DurationMask } from '../model/DurationMask';
import { durationMaskOptions } from '../model/DurationMaskOption';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(displayNumber: number, durationMask?: DurationMask): string {
    const defaultMask: DurationMask = [durationMaskOptions.hour, durationMaskOptions.minute, durationMaskOptions.second];
    return formatDuration(displayNumber, Object.assign([], durationMask || defaultMask));
  }
}

function formatDuration( durationValue: number, durationMask: DurationMask): string {
  let displayText = '';
  durationMask = durationMask.reverse();

  durationMask.forEach(durationMaskOption => {
    let formattedDurationOption = durationMaskOption.suffix;
    for (let digit = 0; digit < durationMaskOption.digitAmount; digit++) {
      formattedDurationOption = getLastDigit(durationValue) + formattedDurationOption;
      durationValue = Math.floor(durationValue / 10);
    }
    formattedDurationOption = ' ' + formattedDurationOption;
    displayText = formattedDurationOption + displayText;
  });

  return displayText.slice(1); // Remove the whitespace in front
}

function getLastDigit(number: number): number {
  return number % 10;
}
