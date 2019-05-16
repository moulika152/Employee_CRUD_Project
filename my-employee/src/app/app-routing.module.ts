import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeCreateUpdateComponent } from './employee-create-update/employee-create-update.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component';

const routes: Routes = [
  {path:'delete_employee', component:EmployeeDeleteComponent},
  {path:'create_update_employee', component:EmployeeCreateUpdateComponent},
  {path:'get_all_employees', component:EmployeeGetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }