import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { FluxHttpComponent } from './flux-http/flux-http.component';
import {HttpClientModule} from "@angular/common/http";
import {FluxHttpService} from "./flux-http.service";

@NgModule({
  declarations: [
    AppComponent,
    PalindromeComponent,
    FluxHttpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FluxHttpService,PalindromeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
