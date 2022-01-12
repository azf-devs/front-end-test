import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TEXT_PARAM} from './core/constants';

const routes: Routes = [

  {
    path: 'start/:' + TEXT_PARAM,
    loadChildren: './pages/start/start.module#StartModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
