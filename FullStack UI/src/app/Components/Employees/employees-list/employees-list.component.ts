import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeservice: EmployeesService) {}

  ngOnInit(): void {
    this.employeeservice.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
