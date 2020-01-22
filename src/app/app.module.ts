import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DurationModule } from 'src/duration/duration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DurationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
