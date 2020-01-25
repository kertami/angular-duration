import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { DurationPipe } from './pipes/duration.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [DurationInputComponent, DurationPipe],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [DurationInputComponent]
})
export class DurationModule { }
