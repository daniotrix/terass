
import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription: Subscription;

  constructor() {
    this.subcription = this.regresaObservable().subscribe(
      numero => console.log('Subs ', numero),
      error => console.log('Error en el obs ', error),
      () => console.log('El obserbador termino!')
    );



  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se va a cerrar');
    this.subcription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval( () => {
        contador ++;

        const salida = {
          valor: contador
        };

        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval( intervalo );
        //   observer.complete();
        // }

      }, 1000);
    }).pipe(
      map( resp => resp.valor),
      filter( ( valor, index ) => {
        if ( ( valor % 2 === 1 ) ) {
          return true;
        } else {
          return false;
        }
      } )
    );
  }

}
