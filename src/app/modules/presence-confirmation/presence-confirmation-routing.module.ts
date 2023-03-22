import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresenceConfirmationComponent } from './presence-confirmation/presence-confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: PresenceConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
