import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { UpperComponent } from './upper/upper.component';
import { UpperDirective } from './upper.directive';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UpperComponent,
    UpperDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
