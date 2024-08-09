import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  public getEmployee(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: any) => {
        console.log('error occured', error);
      }
    );
  }

  public deleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log('Employee deleted succesfully', response);
        alert('Employee deleted succesfully');

        this.employees = this.employees.filter(
          (employee) => employee.id === employeeId
        );
      },

      (error: any) => {
        console.error('Error deleting employee', error);
      }
    );
  }
}
