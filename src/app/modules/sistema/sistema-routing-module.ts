import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaSistemaComponent } from './pages/pagina-sistema/pagina-sistema';

const routes: Routes = [
  { path: '', component: PaginaSistemaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }