import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { PalindromeListComponent } from './palindrome-list/palindrome-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PalindromeComponent,
    PalindromeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
