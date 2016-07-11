declare var require:any;

import { Component } from '@angular/core';

@Component({
  selector:'my-component',
  template: require('./app.component.html'),
  styles:[
    `h1 { color: red }`
  ]
})
export class MyComponent{
  constructor(){}
}
