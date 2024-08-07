import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';

import { AppComponent } from './app.component';

import { EmployeeService } from './employee.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppComponent],

  providers: [
    provideHttpClient(),
    BrowserModule,
    EmployeeService,
    // Automatically uses interceptors provided via DI
  ],
})
export class AppModule {}
