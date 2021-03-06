import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert';
import { map } from 'rxjs/internal/operators/map';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router,
    public _subirArchivoService: SubirArchivoService
  ) {
    this.cargarStorage();
  }

  isLoggedIn() {
    return ( this.token.length > 5 ) ? true : false;
  }


  crearUsuario( usuario: Usuario ) {
    const url = URL_SERVICIOS + '/usuario';
    return this.http.post( url, usuario ).pipe(
      map( (resp: any) => {
        swal('Usuario creado', usuario.email + 'Ingresa ya mismo para completar tu perfil! :)', 'success');
        return resp.usuario;
      })
    );

  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
      localStorage.setItem('id', id);
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify( usuario ));
      this.usuario = usuario;
      this.token = token;
  }

  cargarStorage () {
    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }
  login( usuario: Usuario, recordar: boolean = false ) {
    if ( recordar ) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }
    const url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
    .pipe(map((resp: any) => {

      this.guardarStorage( resp.id, resp.token, resp.usuario);
      return true;
    }));

  }

  actualizarUsuario( usuario: Usuario ) {
    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url += '?token=' + this.token;
    // console.log(url);
    return this.http.put(url, usuario).pipe(
      map((resp: any) => {
        // this.usuario = resp.usuario;
        const usuarioDB: Usuario = resp.usuario;
        this.guardarStorage( usuarioDB._id, this.token, usuarioDB );
        swal('Información actualizada!', usuario.nombre, 'success');
        return true;
      })
    );
  }

  cambiarImagen ( archivo: File, id: string ) {
    this._subirArchivoService.subirArchivo(archivo, 'usuarios', id).then( (resp: any) => {
      this.usuario.img = resp.usuario.img;
      swal('Imagen actualizada', this.usuario.nombre, 'success');
      this.guardarStorage(id, this.token, this.usuario);
       console.log(resp);
      }).catch( resp => console.log(resp) );
  }
}
