import { Component } from '@angular/core'

@Component({

    selector: 'my-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    
})

export class EmployeeComponent {
    columnSpan: number = 2;
    firstName: string = 'Tom';
    lastName: string = 'Julius';
    Gender: string = 'Male';
    Age: number = 20;
}
