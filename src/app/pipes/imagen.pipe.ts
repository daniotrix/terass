import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuarios'): any {


    let url = URL_SERVICIOS + '/imagen';
    if ( !img ) {
      return url + '/usuarios/asd';
    }

    if ( img.indexOf('https') >= 0 ) {
      return img;
    }

    switch ( tipo ) {
      case 'usuarios':
        url += '/usuario/' + img;
      break;
      default:
        console.log('Tipo de imagen no existe');
        url += '/usuarios/asd';
    }
    return url;
  }

}
