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
}
