import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';

const routes: Routes = [
  { path: '', component: EmployeesListComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'employees/addemployee', component: AddEmployeeComponent },
  { path: 'employees/edit/:id', component: EditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
