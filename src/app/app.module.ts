import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromeDetectorComponent } from './components/palindrome-detector/palindrome-detector.component';
import { PalindromeListComponent } from './components/palindrome-list/palindrome-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PalindromeDetectorComponent,
    PalindromeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
