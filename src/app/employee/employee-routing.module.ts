import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {
    path:'list',component:EmployeeListComponent
  },
  {
     path:'add',component:EmployeeAddComponent
  },
  {
    path:'edit/:id',component:EmployeeEditComponent
  },
  {path:'',redirectTo:'list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class EmployeeRoutingModule { }
