import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootPalindomeComponent } from './root-palindome/root-palindome.component';
import { FluxPalindomeComponent } from './flux-palindome/flux-palindome.component';
import { AppRoutingModule } from './app-routing.module';
import { OKKOPipe } from './ok-ko.pipes';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RootPalindomeComponent,
    FluxPalindomeComponent,
    OKKOPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
