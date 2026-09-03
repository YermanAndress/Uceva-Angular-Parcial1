import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // ... otras rutas (users, products, etc.)
  {
    path: 'principios',
    loadChildren: () => import('./modules/principios-soft/principios-soft.module')
      .then(m => m.PrincipiosSoftModule)
  },
  { path: '', redirectTo: '/principios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }