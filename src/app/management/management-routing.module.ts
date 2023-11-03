import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingredientComponent } from './ingredientmanage/addingredient/addingredient.component';
import { ViewingredientComponent } from './ingredientmanage/viewingredient/viewingredient.component';
import { AddCategoryComponent } from './CategoryManage/add-category/add-category.component';
import { ViewCategoriesComponent } from './CategoryManage/view-categories/view-categories.component';

const routes: Routes = [
  {
    path: 'addingredient',
    component: AddingredientComponent
  },
  {
    path:'viewingredients',
    component:ViewingredientComponent
  },
  {
    path:'addcategory',
    component:AddCategoryComponent
  },
  {
    path:'viewcategoris',
    component:ViewCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
