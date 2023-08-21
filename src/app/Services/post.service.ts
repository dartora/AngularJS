import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://gorest.co.in/public/v2/posts';
  private token = '0b5298cafcd15f8c6d40880c96b0f08f3f5cad5759950b295f640ec9eb7792a9'; // Substitua pelo seu token de API

  constructor(private http: HttpClient) { }

  // Métodos para acessar a API aqui...
  getPosts(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
