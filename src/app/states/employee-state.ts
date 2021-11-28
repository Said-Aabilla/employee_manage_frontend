import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee-service.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeState {
  private _employees: BehaviorSubject<Employee[]> = new BehaviorSubject<
    Employee[]
  >([]);

  public get employees(): BehaviorSubject<Employee[]> {
    return this._employees;
  }
  public set employees(value: BehaviorSubject<Employee[]>) {
    this._employees = value;
  }

  constructor() {}

  public getEmployees(): Observable<Employee[]> {
    return this._employees.asObservable();
  }

  public findEmployee(employeeId: number): Employee {
    const value = this._employees.getValue();
    return value.find(person => person.id === employeeId)!;
  }

  public addEmployee(employee: Employee): void {
    if (employee) {
      const value = this._employees.getValue();
      this._employees.next([...value, employee]);
    }
  }

  public updateEmployee(newEmployee: Employee) {
    const menuItemsUpdated = this._employees.getValue().map((employee) => {
      if (employee.id === newEmployee.id) {
        return { ...employee, ...newEmployee };
      }
      return employee;
    });

    this._employees.next(menuItemsUpdated);
  }

  public deleteEmployee(employeeId: number) {
    const value = this._employees.getValue();
    this._employees.next(value.filter((employee) => employee.id != employeeId));
  }
}
