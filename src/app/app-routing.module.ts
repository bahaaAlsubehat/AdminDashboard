import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { ManagementModule } from './management/management.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> DashboardModule
  },
  {
    path:'management',
    loadChildren: ()=> ManagementModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
