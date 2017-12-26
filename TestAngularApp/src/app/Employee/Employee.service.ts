import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
@Injectable()
export class EmployeeService {
    getEmployee(): IEmployee[] {
        return [
            { code: 'empl101', name: 'Tom', gender: 'male', annualSal: 6599 },
            { code: 'empl102', name: 'Tom', gender: 'female', annualSal: 6599 },
            { code: 'empl103', name: 'Tom', gender: 'female', annualSal: 6599 },
            { code: 'empl104', name: 'Tom', gender: 'male', annualSal: 6599 },
            { code: 'empl105', name: 'Tom', gender: 'male', annualSal: 6599 },
            { code: 'empl206', name: 'Verne', gender: 'female', annualSal: 52222 },
            { code: 'empl206', name: 'Verne', gender: 'female', annualSal: 52222 }
        ];
    }
}