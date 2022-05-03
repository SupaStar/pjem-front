import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SolicitudesService } from '../services/solicitudes.service';

@Component({
  selector: 'app-ver-solicitud',
  templateUrl: './ver-solicitud.component.html',
  styleUrls: ['./ver-solicitud.component.css'],
})
export class VerSolicitudComponent implements OnInit {
  id: number;
  solicitud: any={
    id_solicitud: 0,
    nombre_Solicitante: '',
    paterno_Solicitante: '',
    materno_Solicitante: '',

  };
  constructor(
    private rutaActiva: ActivatedRoute,
    private solicitudesServ: SolicitudesService,
    private router: Router
  ) {
    this.id = this.rutaActiva.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.cargar();
  }
  cargar() {
    this.solicitudesServ.encontrar(this.id).subscribe(
      (data) => {
        if (data.code == 303) {
          alert('Tu sesión ha expirado');
          this.router.navigate(['/']);
        } else if (data.estado) {
          this.solicitud = data.detalle;
        } else {
          alert('No se encontró la solicitud');
        }
      },
      (error) => {
        alert('Error al cargar la solicitud');
      }
    );
  }
}
