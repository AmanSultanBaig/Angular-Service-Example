import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../../shared/employee-data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList:any = [];
  constructor(private empList:EmployeeDataService) { }

  ngOnInit() {
    this.employeeList = this.empList.getEmployeeDatails();
  }

}
