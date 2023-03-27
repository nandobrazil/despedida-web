import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    LoginComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    ButtonModule
  ]
})
export class AdminModule { }
