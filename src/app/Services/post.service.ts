import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = environment.apiUrl;
  private token = environment.apiToken; //

  constructor(private http: HttpClient) {}

  // Métodos para acessar a API aqui...
  getPosts(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get(`${this.apiUrl}/posts`, { headers });
  }
}
