import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './Employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeListcomponent.css'],
    providers: [EmployeeService]
})



export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string;

    constructor(private _employeeService: EmployeeService) {
     
    }

    ngOnInit() {
        this._employeeService.getEmployee().subscribe((employeeData) =>
            this.employees = employeeData,
            (error) => {
                this.statusMessage = "Not Working on this path";
            });
    }

  
    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.GENDER === "male").length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.GENDER === "female").length;
    }

}