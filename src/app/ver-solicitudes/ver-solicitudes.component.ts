import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitudesService } from '../services/solicitudes.service';

@Component({
  selector: 'app-ver-solicitudes',
  templateUrl: './ver-solicitudes.component.html',
  styleUrls: ['./ver-solicitudes.component.css'],
})
export class VerSolicitudesComponent implements OnInit {
  solicitudes: any = [];
  constructor(
    private solicitudesServ: SolicitudesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargar();
  }
  cargar() {
    this.solicitudesServ.verSolicitudes().subscribe(
      (data) => {
        if (data.code == 303) {
          alert('Tu sesión ha expirado');
          this.router.navigate(['/']);
        } else if (data.estado) {
          if(data.detalle.length == 0){
            alert('No hay solicitudes');
          }
          this.solicitudes = data.detalle;
        } else {
          alert('No se encontraron solicitudes');
        }
      },
      (error) => {
        alert('Error al cargar las solicitudes');
      }
    );
  }
  eliminar(id: number) {
    //Alerta de confirmación
    if (confirm('¿Está seguro de cancelar la solicitud?')) {
      this.solicitudesServ.cancelarSolicitud(id).subscribe(
        (data) => {
          if (data.code == 303) {
            alert('Tu sesión ha expirado');
            this.router.navigate(['/']);
          } else if (data.estado) {
            alert('Solicitud cancelada');
            this.cargar();
          } else {
            alert('Error al cancelar la solicitud');
          }
        },
        (error) => {
          alert('Error al cancelar la solicitud');
        }
      );
    }
  }
  ver(id:number){
    this.router.navigate(['/ver-solicitud/'+id]);
  }
}
