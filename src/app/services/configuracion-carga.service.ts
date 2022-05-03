import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionCargaService {
  urlCrear = url + 'configuracion_carga/crear';
  constructor(private http: HttpClient) {}
  crear(data: any): Observable<any> {
    const httpOpt = this.obtenerToken();
    return this.http.post(this.urlCrear, data, httpOpt);
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
