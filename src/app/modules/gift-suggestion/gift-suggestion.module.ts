import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiftSuggestionRoutingModule } from './gift-suggestion-routing.module';
import { GiftSuggestionComponent } from './gift-suggestion/gift-suggestion.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    GiftSuggestionComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    GiftSuggestionRoutingModule
  ]
})
export class GiftSuggestionModule { }
