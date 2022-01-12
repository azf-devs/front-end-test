import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { StartComponent } from './start/start.component';
import { RouterTestingModule } from "@angular/router/testing";

const routes: Routes = [
  {
    path: 'start/:name',
    component: StartComponent
  },
  {
    path: 'plaindrome',
    component: PalindromeComponent
  }
];

@NgModule({
  imports: [RouterTestingModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
