import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor() { }
  // define details what i want to access in my components
  getEmployeeDatails() {
    return [
      { name: "Aman Sultan Baig", designation: "Js Developer", description: "Abc details" },
      { name: "Nabeel Jameel", designation: "Angular Developer", description: "Abc details" },
      { name: "Haris Ahmed Sheikh", designation: "React Native Developer", description: "Abc details" },
      { name: "Ahmed Mian", designation: "React JS Developer", description: "Abc details" },
      { name: "Haris Sheikh", designation: "IOS Developer", description: "Abc details" },
      { name: "Anas Sheikh", designation: "Java Developer", description: "Abc details" }
    ]
  }
}
