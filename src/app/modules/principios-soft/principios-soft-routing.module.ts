import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';

/** Configura las rutas internas del modulo de principios. */
const routes: Routes = [
  {
    path: '',
    component: PaginaPrincipalComponent
  },
  {
    path: '**',
    component: PaginaPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipiosSoftRoutingModule { }