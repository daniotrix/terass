import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progres',
  templateUrl: './progres.component.html',
  styles: []
})
export class ProgresComponent implements OnInit {

  percent1: number = 20;
  percent2: number = 30;

  constructor() { }

  ngOnInit() {
  }

  actualizar( event: number ) {
    console.log('Evento', event);
  }
}
