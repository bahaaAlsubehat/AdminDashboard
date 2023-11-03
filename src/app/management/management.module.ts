import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { AddingredientComponent } from './ingredientmanage/addingredient/addingredient.component';
import { ViewingredientComponent } from './ingredientmanage/viewingredient/viewingredient.component';
import { SharedModule } from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddCategoryComponent } from './CategoryManage/add-category/add-category.component';
import { ViewCategoriesComponent } from './CategoryManage/view-categories/view-categories.component';

@NgModule({
  declarations: [
    AddingredientComponent,
    ViewingredientComponent,
    AddCategoryComponent,
    ViewCategoriesComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    SharedModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule

  ]
})
export class ManagementModule { }
