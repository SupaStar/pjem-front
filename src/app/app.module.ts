import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ConfiguracionCargaFormularioComponent } from './configuracion-carga-formulario/configuracion-carga-formulario.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { VerSolicitudesComponent } from './ver-solicitudes/ver-solicitudes.component';
@NgModule({
  declarations: [AppComponent, InicioComponent, LoginComponent, ConfiguracionCargaFormularioComponent, CrearSolicitudComponent, VerSolicitudesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
