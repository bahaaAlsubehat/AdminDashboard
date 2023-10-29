import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingredientComponent } from './ingredientmanage/addingredient/addingredient.component';
import { ViewingredientComponent } from './ingredientmanage/viewingredient/viewingredient.component';

const routes: Routes = [
  {
    path: 'addingredient',
    component: AddingredientComponent
  },
  {
    path:'viewingredients',
    component:ViewingredientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
