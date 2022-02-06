import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PalindromeComponent} from "./palindrome/palindrome.component";
import {FluxHttpComponent} from "./flux-http/flux-http.component";

const routes: Routes = [
  { path: 'start/:word', component: PalindromeComponent },
  { path: 'flux', component: FluxHttpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
