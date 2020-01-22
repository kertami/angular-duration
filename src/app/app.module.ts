import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DurationModule } from 'src/duration/duration.module';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    DurationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
