import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArqSoftwareComponent } from './pages/list-arq-software/list-arq-software.component';

const routes: Routes = [
  {
    path: 'list-arq-software',
    component: ListArqSoftwareComponent
  },
  {
    path: '**',
    redirectTo: 'list-arq-software'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArqSoftwareRoutingModule { }
