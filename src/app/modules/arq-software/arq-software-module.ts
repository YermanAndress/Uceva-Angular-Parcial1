import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { CardArqSoftwareComponent } from './components/card-arq-software/card-arq-software.component';
import { ListArqSoftwareComponent } from './pages/list-arq-software/list-arq-software.component';
import { ArqSoftwareRoutingModule } from './arq-software-routing-module';
import { ArqSoftware } from './arq-software';

@NgModule({
  declarations: [
    ListArqSoftwareComponent,
    CardArqSoftwareComponent,
    ArqSoftware
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArqSoftwareRoutingModule
  ]
})
export class ArqSoftwareModule { }
