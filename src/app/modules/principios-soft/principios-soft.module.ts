import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrincipiosSoftRoutingModule } from './principios-soft-routing.module';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { TablePrincipiosSoftComponent } from './components/table-principios-soft.component/table-principios-soft.component.component';
import { PrincipiosSoftComponent } from './principios-soft.component';

/** Agrupa los componentes y rutas del modulo de principios. */
@NgModule({
  declarations: [
    PrincipiosSoftComponent,
    PaginaPrincipalComponent,
    TablePrincipiosSoftComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrincipiosSoftRoutingModule
  ]
})
export class PrincipiosSoftModule { }