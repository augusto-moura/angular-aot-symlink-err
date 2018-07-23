import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LibServicesModule } from 'proxy-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
