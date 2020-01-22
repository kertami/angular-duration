import { Pipe, PipeTransform } from '@angular/core';

export interface DurationMaskOption {
  digitAmount: number;
  suffix: string;
}

type DurationMask = DurationMaskOption[];

type durationMaskOptionKeys = 'hour' | 'minute' | 'second';

const durationMaskOptions: Record<durationMaskOptionKeys, DurationMaskOption> = {
  'hour' : {digitAmount: 2, suffix: 'h'},
  'minute' : {digitAmount: 2, suffix: 'm'},
  'second' : {digitAmount: 2, suffix: 's'},
};

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(displayNumber: number): string {
    // TODO move mask to parameter
    const defaultMask: DurationMask = [durationMaskOptions.hour, durationMaskOptions.minute, durationMaskOptions.second];

    return formatDuration(displayNumber, defaultMask);
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
