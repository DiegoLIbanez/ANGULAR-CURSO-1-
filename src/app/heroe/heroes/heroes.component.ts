import { Component } from "@angular/core";


@Component ({
    selector:'app-heroe',
    templateUrl:'heroes.component.html'
})
export class HeroeComponent {
 nombre:string = "Spiderman";
 edad:Number = 22;

get NombreCapitalizado(){

    return this.nombre.toUpperCase();
    }
 TenerNombre ():string{
    return `${this.nombre} - ${this.edad}`
    }

 cambiarNombre():void {
      this.nombre = 'Ironman'
 }
 cambiarEdad():void {
    this.edad = 45
 }   


}