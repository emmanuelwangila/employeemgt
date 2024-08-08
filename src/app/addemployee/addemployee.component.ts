import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-addemployee',
  standalone: true,
  imports: [],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css',
})
export class AddemployeeComponent {
  title = 'add-employee ';

  public employee: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}
}
