import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import {
  HttpClientModule,
  HttpErrorResponse,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { myInterceptor } from './my-interceptor.service'; // Import the functional interceptor

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterOutlet,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'employeemgt';
}
