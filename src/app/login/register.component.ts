import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

declare function sendPlugin();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }

  validatePassword( campo1: string, campo2: string ) {
      return (group: FormGroup) => {

        const pass1 = group.controls[campo1].value;
        const pass2 = group.controls[campo2].value;

        if ( pass1 === pass2 ) {
          return null;
        }

        return {
          sonIguales: true
        };
      };
  }

  ngOnInit() {
    sendPlugin();

    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required ),
      correo: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required ),
      condiciones: new FormControl( false )

    }, {validators: this.validatePassword('password', 'password2')}
    );
    this.forma.setValue({
      nombre: 'Daniel',
      correo: 'danil@asd.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    });
  }
  registrarUsuario() {
    if ( this.forma.invalid ) {
      return;
    }

    if ( !this.forma.value.condiciones ) {
      swal('Importante!', 'Debe aceptar los terminos y condiciones', 'warning');
      // console.log('Debe de aceptar las condiciones');
      return;
    }

    const usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password
    );
    this._usuarioService.crearUsuario(usuario).subscribe(resp => this.router.navigate(['/login']));
  }

}
