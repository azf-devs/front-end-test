import { PalindromeListComponent } from './components/palindrome-list/palindrome-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalindromeComponent } from './components/palindrome/palindrome.component';

const routes: Routes = [

  { path: 'start/:charSequence', component: PalindromeComponent},
  { path: '', pathMatch: 'full', component: PalindromeListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
