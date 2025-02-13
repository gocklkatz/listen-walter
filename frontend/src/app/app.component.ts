import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee, Login } from './types';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-root',
  imports: [LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'TheFrontend';
  employees: Employee[] = [];
  editEmployee?: Employee;
  deleteEmployee?: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  handleLoginEvent(loginData: Login): void {
    //console.log(event.login, event.password);
    this.employeeService.login(loginData).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
}
