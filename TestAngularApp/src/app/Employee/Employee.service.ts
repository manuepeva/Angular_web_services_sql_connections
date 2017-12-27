﻿import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) {

    }
    getEmployee(): Observable<IEmployee[]>{
        return this._http.get("http://localhost:53543/api/employees")
            .map((response: Response) => <IEmployee[]>response.json())
    
    }
}