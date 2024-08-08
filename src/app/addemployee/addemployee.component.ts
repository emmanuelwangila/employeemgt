import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-addemployee',
  standalone: true,
  imports: [],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css',
})
export class AddemployeeComponent {
  title = 'add-employee ';

  public employee: Employee = {
    id: 0,
    name: '',
    email: '',
    title: '',
    phone: '',
    employeeCode: '',
    imageUrl: '',
  };

  constructor(private employeeService: EmployeeService) {}

  public addEmployee(): void {
    this.employeeService
      .addEmployees(this.employee)
      .subscribe((response: Employee) => {
        console.log(response);
        alert('Employee added succesfully');
      }),
      (error: Error) => {
        console.error(error);
        alert('Failed to add an employee');
      };
  }
}
