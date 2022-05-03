import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario;
  errores='';
  constructor(private fm: FormBuilder,private authService:LoginServiceService,private router:Router) {
    this.formulario = this.fm.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  enviar() {
    if (this.formulario.valid) {
      this.authService.iniciarSesion(this.formulario.value).subscribe(
        (data) => {
          if(data.estado){
            localStorage.setItem('token',data.token);
            this.router.navigate(['/inicio']);
          }else{
            this.errores=data.errors;
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
