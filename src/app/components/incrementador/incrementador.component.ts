import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtPercent') txtPercent: ElementRef;


  @Input('nombre') leyenda: string = 'Leyenda';

  @Input() percent: number = 50;

  @Output('actualizaValor') cambioValor:  EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.percent);
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.percent);
  }

  onChanges( newValue: number ) {


    // let elementHTML: any = document.getElementsByName('percent')[0];




    if ( newValue >= 100 ) {
      this.percent = 100;
    } else if ( newValue <= 0 ) {
      this.percent = 0;
    } else {
      this.percent = newValue;
    }

    // elementHTML.value = this.percent;
    this.txtPercent.nativeElement.value = this.percent;

    this.cambioValor.emit( this.percent );

 
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

    this.txtPercent.nativeElement.focus();

  }

}
