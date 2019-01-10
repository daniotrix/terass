import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = 'Leyenda';

  @Input() percent: number = 50;

  @Output() cambioValor:  EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.percent);
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.percent);
  }

  cambiarvalor( valor: number ) {
    if ( this.percent >= 100 && valor > 0 ) {
      this.percent = 100;
      return;
    }
    if ( this.percent <= 0 && valor < 0 ) {
      this.percent = 0;
      return;
    }

    this.percent = this.percent + valor;

    this.cambioValor.emit( this.percent );

  }

}
