import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  urlAsesores = url + 'usuarios/asesores';
  constructor(private http: HttpClient) {}
  asesores(): Observable<any> {
    return this.http.get(this.urlAsesores);
  }
  obtenerToken() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };
    return httpOptions;
  }
}
