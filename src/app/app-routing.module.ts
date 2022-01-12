import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TEXT_PARAM} from './core/constants';
import {PalindromeComponent} from './pages/palindrome/palindrome.component';

const routes: Routes = [

  {
    path: 'start/:' + TEXT_PARAM,
    loadChildren: './pages/start/start.module#StartModule'
  },
  {
    path: '',
    component: PalindromeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
