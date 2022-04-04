
import {Component} from '@angular/core'

@Component ({
    selector:'app-contador',
    template:`

    <h1>{{titulo}}<h1> 
    <h3>Base es de :<strong>{{base}}</strong></h3>
    <button (click)="acumulador(-base)">- {{base}}</button>
    
    <span>{{numero}}</span>
    
    <button (click)="acumulador( base )"> + {{base}} </button>
    `
})
export class ContadorComponent  {   
  titulo:string = 'Contador app';
  numero:number = 10;
  base:number= 5;

  acumulador(valor:number) {
    this.numero += valor;
  }
 

}  