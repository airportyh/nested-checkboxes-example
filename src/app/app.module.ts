import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NestedCheckboxesComponent } from './nested-checkboxes/nested-checkboxes.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedCheckboxesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
