import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'arq-software',
    loadChildren: () =>
        import('./modules/arq-software/arq-software-module').then((m) => m.ArqSoftwareModule),
  },
  {
    path: 'principios',
    loadChildren: () =>
      import('./modules/principios-soft/principios-soft.module').then(m => m.PrincipiosSoftModule)
  },
  {
    path: '**',
    redirectTo: 'arq-software',
  },
  { path: '', redirectTo: '/arq-software', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}