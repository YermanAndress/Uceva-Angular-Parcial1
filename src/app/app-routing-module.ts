import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'arq-software',
    loadChildren: () =>
      import('./modules/arq-software/arq-software-module').then((m) => m.ArqSoftwareModule),
  },
  {
    path: '**',
    redirectTo: 'arq-software',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
