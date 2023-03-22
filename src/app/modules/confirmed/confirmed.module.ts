import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmedRoutingModule } from './confirmed-routing.module';
import { ConfirmedComponent } from './confirmed/confirmed.component';


@NgModule({
  declarations: [
    ConfirmedComponent
  ],
  imports: [
    CommonModule,
    ConfirmedRoutingModule
  ]
})
export class ConfirmedModule { }
