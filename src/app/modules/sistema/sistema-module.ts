import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfoCardComponent } from './components/info-card/info-card';
import { StatCardComponent } from './components/stat-card/stat-card';
import { VistaSistemaComponent } from './components/vista-sistema/vista-sistema';
import { PaginaSistemaComponent } from './pages/pagina-sistema/pagina-sistema';
import { SistemaRoutingModule } from './sistema-routing-module';

@NgModule({
  declarations: [
    PaginaSistemaComponent,
    VistaSistemaComponent,
    StatCardComponent,
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule
  ]
})
export class SistemaModule { }