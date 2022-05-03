import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionCargaService } from '../services/configuracion-carga.service';

@Component({
  selector: 'app-configuracion-carga-formulario',
  templateUrl: './configuracion-carga-formulario.component.html',
  styleUrls: ['./configuracion-carga-formulario.component.css'],
})
export class ConfiguracionCargaFormularioComponent implements OnInit {
  errores = '';
  formulario;
  constructor(
    private fm: FormBuilder,
    private confCargaService: ConfiguracionCargaService,
    private router: Router
  ) {
    this.formulario = this.fm.group({
      proporcion: ['', Validators.required],
      diferencia: ['', Validators.required],
      anio: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  enviar() {
    if (this.formulario.valid) {
      this.confCargaService.crear(this.formulario.value).subscribe(
        (data) => {
          if (data.code == 303) {
            alert('Tu sesión ha expirado');
            this.router.navigate(['/']);
          } else if (data.estado) {
            alert('Se ha creado la configuración de carga');
            this.formulario.reset();
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
