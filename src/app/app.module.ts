import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromeService } from './services/palindrome.service';
import { PalindromeCheckComponent } from './components/palindrome-check/palindrome-check/palindrome-check.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PalindromeListComponent } from './components/palindrome-show/palindrome-list/palindrome-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PalindromeCheckComponent,
    PalindromeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatListModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [PalindromeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
