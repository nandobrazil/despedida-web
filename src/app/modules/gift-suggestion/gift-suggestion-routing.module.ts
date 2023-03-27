import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftSuggestionComponent } from './gift-suggestion/gift-suggestion.component';

const routes: Routes = [
  {
    path: '',
    component: GiftSuggestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiftSuggestionRoutingModule { }
