import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Principal } from './principal/principal';
import { Cidade } from './cidade/cidade';

const routes: Routes = [
  { path: '', component: Principal },
  { path: 'cidade/:nome', component: Cidade },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
