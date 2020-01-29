import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../../shared/employee-data.service'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeDetails:any = [];
  constructor(private empDetails: EmployeeDataService) { }

  ngOnInit() {
    this.employeeDetails = this.empDetails.getEmployeeDatails();
  }

}
