import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable()

export class EmployeeService {

    private url = '/api';
    constructor(private http: HttpClient) {
    }
    getEmployee(id:number): Observable<Employee> {
        const employeeUrl = `${this.url}/getemployee/${id}`;
        return this.http.get<Employee>(employeeUrl);
    }
    updateEmployee(employee: Employee): Observable<Employee>{
        const empUrl = `${this.url}/updateemployee`;
        return this.http.post<Employee>(empUrl, employee);
    }
    deleteEmployee(id: number): Observable<Boolean> {
        const empUrl = `${this.url}/deleteemployee/${id}`;
        return this.http.get<Boolean>(empUrl);
    }
    addEmployee(employee: Employee): Observable<Employee>{
        const empUrl = `${this.url}/addemployee`;
        return this.http.post<Employee>(empUrl, employee);
    }
    getAllEmployees():Observable<Employee[]>{
        const empUrl = `${this.url}/allemployees`;
        return this.http.get<Employee[]>(empUrl);
    }
}