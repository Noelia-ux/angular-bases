import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heronames: string[] =['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
    //public deletedHero: string = '';
    public deletedHero?: string;
 //a las funciones o pequeños trozos de código podemos llamarle scoope
removeLastHero():void{
  //Si quiero que mi variable viva a los largo de toda mi clase, tengo que crearla como una propiedad
  this.deletedHero= this.heronames.pop();
  //console.log({ deletedHero })//Para ver claramente qué estamos borrando
  }

  }
