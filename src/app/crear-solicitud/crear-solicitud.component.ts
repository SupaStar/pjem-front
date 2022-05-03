import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitudesService } from '../services/solicitudes.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css'],
})
export class CrearSolicitudComponent implements OnInit {
  formulario;
  errores = '';
  asesores: any = [];
  constructor(
    private fm: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router,
    private solicitudesService: SolicitudesService
  ) {
    this.formulario = this.fm.group({
      id_Usuario_Asignado: ['', Validators.required],
      nombre_Solicitante: ['', Validators.required],
      paterno_Solicitante: ['', Validators.required],
      materno_Solicitante: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerAsesores();
  }
  obtenerAsesores() {
    this.usuariosService.asesores().subscribe(
      (data) => {
        if (data.code == 303) {
          alert('Tu sesión ha expirado');
          this.router.navigate(['/']);
        } else if (data.estado) {
          this.asesores = data.asesores;
        } else {
          this.errores = data.errors;
        }
      },
      (error) => {
        this.errores = error.error.error;
      }
    );
  }
  enviar() {
    if (this.formulario.valid) {
      this.solicitudesService.crearSolicitud(this.formulario.value).subscribe(
        (data) => {
          if (data.code == 303) {
            alert('Tu sesión ha expirado');
            this.router.navigate(['/']);
          } else if (data.estado) {
            alert('Se ha creado la solicitud');
            this.formulario.reset();
            this.errores = '';
          } else {
            this.errores = data.errors;
          }
        },
        (error) => {
          this.errores = error.error.error;
        }
      );
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
