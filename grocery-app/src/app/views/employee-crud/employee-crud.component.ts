import { Observable } from "rxjs";
import { EmployeeService } from "../../service/employee.service";
import { Employee } from "./employee";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {
  employees: Observable<Employee[]>

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    // this.employeeService.getEmployeesList().subscribe(
    //   response => {
    //     console.info(response)
    //     this.employees = response
    //   }
    // )
    this.employees = this.employeeService.getEmployeesList()
  }

}
