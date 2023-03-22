import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'presence-confirmation',
    pathMatch: 'full'
  },
  {
    path: 'presence-confirmation',
    loadChildren: () => import('./modules/presence-confirmation/presence-confirmation.module').then(m => m.LoginModule)
  },
  {
    path: 'confirmed',
    loadChildren: () => import('./modules/confirmed/confirmed.module').then(m => m.ConfirmedModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
