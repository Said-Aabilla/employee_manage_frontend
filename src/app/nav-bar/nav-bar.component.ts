import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee-service.service';
import { EmployeeFacade } from 'src/app/facades/employee-facade';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  public searchEmployees(key: string): void {
    console.log(key);
  }
}
