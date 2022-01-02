import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalindromeComponent } from './screen/palindrome/palindrome.component';
import { HomeComponent } from './screen/home/home.component';
import { FluxComponent } from './screen/flux/flux.component';

const routes: Routes = [{ path: '', component: HomeComponent}, { path: 'start/:word', component: PalindromeComponent}, { path: 'flux', component: FluxComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
