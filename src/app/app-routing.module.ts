import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalindromeCheckComponent } from './components/palindrome-check/palindrome-check/palindrome-check.component';
import { PalindromeListComponent } from './components/palindrome-show/palindrome-list/palindrome-list.component';

const routes: Routes = [
  {
    path: '',
    component: PalindromeListComponent
  },
  {
    path: 'start/:keyword',
    component: PalindromeCheckComponent
  },
  {
    path: 'palindromes/show',
    component: PalindromeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
