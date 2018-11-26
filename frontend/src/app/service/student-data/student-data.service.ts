import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from "../../student";

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  public getStudent(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/students/${id}`);
  }

  public saveStudent(student: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/students/add`, student);
  }

  public getStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/students`);
  }

  public getStudentsForSchool(schoolId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/students-for-school/${schoolId}`);
  }

  public loadNewStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/new-students`);
  }

  public calculateAddresses(): Observable<any> {
    return this.http.post(`${this.apiUrl}/students/calculateAddresses`, null);
  }

  public startAdmission(): Observable<any> {
    return this.http.post(`${this.apiUrl}/fill-data`, null);
  }

  public confirmStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/confirm-students`);
  }
}
