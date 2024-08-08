import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { response } from 'express';

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
}
