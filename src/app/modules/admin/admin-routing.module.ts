import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'panel',
    component: PanelComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
