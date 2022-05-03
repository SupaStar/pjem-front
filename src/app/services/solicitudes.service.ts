import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SolicitudesService {
  urlCrearSolicitud = url + 'solicitudes/crear';
  urlVerSolicitudes = url + 'solicitudes/todo';
  urlCancelarSolicitud = url + 'solicitudes/cancelar/';
  urlEncontrar = url + 'solicitudes/encontrar/';
  constructor(private http: HttpClient) {}
  crearSolicitud(solicitud: any): Observable<any> {
    return this.http.post(
      this.urlCrearSolicitud,
      solicitud,
      this.obtenerToken()
    );
  }
  verSolicitudes(): Observable<any> {
    return this.http.get(this.urlVerSolicitudes, this.obtenerToken());
  }
  cancelarSolicitud(id: number): Observable<any> {
    return this.http.delete(
      this.urlCancelarSolicitud + id,
      this.obtenerToken()
    );
  }
  encontrar(id: number): Observable<any> {
    return this.http.get(this.urlEncontrar + id, this.obtenerToken());
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
