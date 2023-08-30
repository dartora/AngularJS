import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../Components/Users/Table/table.component';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private token = environment.apiToken;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get(`${this.apiUrl}/users`, { headers });
  }

  getUserById(userId: number): Observable<IUser> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<IUser>(`${this.apiUrl}/users/${userId}`, { headers });
  }

  deleteUser(userId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.delete(`${this.apiUrl}/users/${userId}`, { headers });
  }

  updateUser(userId: number, userData: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.put(`${this.apiUrl}/users/${userId}`, userData, {
      headers,
    });
  }
  createUser(userData: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.post(`${this.apiUrl}/users`, userData, { headers });
  }
}
