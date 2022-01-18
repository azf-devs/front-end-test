import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalindromeDetectorComponent } from './components/palindrome-detector/palindrome-detector.component';

const routes: Routes = [
  {path: "**", component: PalindromeDetectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
