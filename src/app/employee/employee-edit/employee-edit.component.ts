import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeFacade } from 'src/app/facades/employee-facade';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  employeeToEdit: Employee = {};

  constructor(
    private employeeFcade: EmployeeFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id')!;
    this.employeeToEdit = this.employeeFcade.getOneEmployee(id);
  }

  public onUpdateEmployee(employee: Employee): void {
    this.employeeFcade.updateEmployee(employee).subscribe(
      (response: Employee) => {
        this.router.navigate(['/employees/list']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
