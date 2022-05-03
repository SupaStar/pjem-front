import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  formularioCarga = false;
  solicitud=false;
  verSolicitudes=false;
  constructor(private router: Router) {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {}
  configuracion() {
    this.formularioCarga = true;
    this.solicitud=false;
    this.verSolicitudes=false;
  }
  solicitudM(){
    this.solicitud=true;
    this.formularioCarga=false;
    this.verSolicitudes=false;
  }
  verSolicitudesM(){
    this.verSolicitudes=true;
    this.solicitud=false;
    this.formularioCarga=false;
  }
}
