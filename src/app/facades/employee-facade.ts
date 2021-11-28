import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee-service.service';
import { EmployeeState } from '../states/employee-state';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFacade {
  constructor(
    private employeeService: EmployeeService,
    private employeeState: EmployeeState
  ) {
    this.hydrate();
  }

  public hydrate() {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        response.forEach((employee) => {
          this.employeeState.addEmployee(employee);
        });
      }
    );
  }

  public getEmployees(): Observable<Employee[]> {
    return this.employeeState.getEmployees();
  }

  public getOneEmployee(employeeId: number): Employee {
    return this.employeeState.findEmployee(employeeId);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    let employee$ = this.employeeService.addEmployee(employee);

    employee$.subscribe((response: Employee) => {
      if (response) {
        this.employeeState.addEmployee(response);
      }
    });

    return employee$;
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    let employee$ = this.employeeService.updateEmployee(employee);

    employee$.subscribe((response: Employee) => {
      if (response) {
        this.employeeState.updateEmployee(response);
      }
    });

    return employee$;
  }
  public deleteEmployee(employeeId: number): Observable<void> {
    let result$ = this.employeeService.deleteEmployee(employeeId);

    if (result$) {
      this.employeeState.deleteEmployee(employeeId);
    }

    return result$;
  }
}
