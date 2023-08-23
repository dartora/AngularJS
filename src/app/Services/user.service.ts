import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../Components/Table/table.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://gorest.co.in/public/v2/users';
  private token =
    '0b5298cafcd15f8c6d40880c96b0f08f3f5cad5759950b295f640ec9eb7792a9'; // Substitua pelo seu token de API

  constructor(private http: HttpClient) {}

  // Métodos para acessar a API aqui...

  // UserService
  getUsers(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get(this.apiUrl, { headers });
  }

  getUserById(userId: number): Observable<IUser> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<IUser>(`${this.apiUrl}/${userId}`, { headers });
  }

  deleteUser(userId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.delete(`${this.apiUrl}/${userId}`, { headers });
  }

  updateUser(userId: number, userData: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.put(`${this.apiUrl}/${userId}`, userData, { headers });
  }
  createUser(userData: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    console.log('oi', `${this.apiUrl}`, userData, { headers });
    return this.http.post(`${this.apiUrl}`, userData, { headers });
  }
}
