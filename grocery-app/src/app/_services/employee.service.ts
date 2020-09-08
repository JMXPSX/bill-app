import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JPA_API_URL } from '../app.constant';
import { Employee } from '../views/employee-crud/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

//   private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';

//   private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

//   getEmployee(id: number): Observable<any> {
//     return this.http.get(`${JPA_API_URL}/${id}`);
//   }

//   createEmployee(employee: Object): Observable<Object> {
//     return this.http.post(`${JPA_API_URL}`, employee);
//   }

//   updateEmployee(id: number, value: any): Observable<Object> {
//     return this.http.put(`${JPA_API_URL}/${id}`, value);
//   }

//   deleteEmployee(id: number): Observable<any> {
//     return this.http.delete(`${JPA_API_URL}/${id}`, { responseType: 'text' });
//   }

  getEmployeesList(): Observable<any> {
    return this.http.get<Employee[]>(`${JPA_API_URL}/employees`);
  }
}