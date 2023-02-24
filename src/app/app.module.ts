import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PalindromeComponent } from './components/palindrome/palindrome.component';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { PalindromeListComponent } from './components/palindrome-list/palindrome-list.component';

@NgModule({
  declarations: [AppComponent, PalindromeComponent, AlertMessageComponent, PalindromeListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
