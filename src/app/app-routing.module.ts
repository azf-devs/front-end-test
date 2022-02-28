
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RootPalindomeComponent } from './root-palindome/root-palindome.component';
import { FluxPalindomeComponent } from './flux-palindome/flux-palindome.component';



export  const routes: Routes = [
  { path: 'start/:term', component: RootPalindomeComponent, },
  { path: 'flux', component: FluxPalindomeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
