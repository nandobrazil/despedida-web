import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './presence-confirmation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PresenceConfirmationComponent } from './presence-confirmation/presence-confirmation.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [
    PresenceConfirmationComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    ButtonModule
  ]
})
export class LoginModule { }
