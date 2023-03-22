import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    ActionBarComponent,
    HeaderComponent
  ],
  exports: [
    ActionBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    CoreModule,
    FormsModule
  ]
})
export class SharedModule { }
