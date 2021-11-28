import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service.service';
import { Employee } from '../../model/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { EmployeeFacade } from 'src/app/facades/employee-facade';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {

  public employees: Employee[] = [];
  public editEmployee?: Employee ;
  public deleteEmployee?: Employee;

  constructor(private employeeService: EmployeeService,
    private employeeFacade: EmployeeFacade){}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeFacade.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEmployee(employeeId: number): void {
    //console.log(employeeId);
    this.employeeFacade.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        alert('employee deleted !!')
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
