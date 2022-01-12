import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalindromeListComponent } from './palindrome-list/palindrome-list.component';
import { PalindromeComponent } from './palindrome/palindrome.component';

const routes: Routes = [
  { path: 'start/:word', component: PalindromeComponent },
  { path: 'liste', component: PalindromeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }