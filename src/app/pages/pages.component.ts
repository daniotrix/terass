import { Component, OnInit } from '@angular/core';
declare function sendPlugin();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sendPlugin();
  }

}
