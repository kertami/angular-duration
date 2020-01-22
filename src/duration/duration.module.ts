import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { DurationPipe } from './pipes/duration.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DurationInputComponent, DurationPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DurationInputComponent]
})
export class DurationModule { }
