import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private urlLoging = url + 'iniciar_sesion';
  constructor(private http: HttpClient) {}
  iniciarSesion(data: any): Observable<any> {
    return this.http.post<any>(this.urlLoging, data);
  }
}
