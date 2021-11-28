import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmployeeFacade } from 'src/app/facades/employee-facade';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  employee: Employee = {};
  constructor(private employeeFacade: EmployeeFacade) {}

  ngOnInit(): void {}

  public onAddEmloyee(addForm: NgForm): void {
    this.employee = addForm.value;

    this.employeeFacade.addEmployee(this.employee).subscribe(
      (response: Employee) => {
        alert(`employee ${response.name} added successfully!!`);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
}
