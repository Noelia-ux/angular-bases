import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-root',//identificador del componente
  templateUrl: './app.component.html', //interfaz del componente
  styleUrl: './app.component.css'// estilo interfaz
})
export class AppComponent {
  public title: string = 'Hola Mundo';

  public counter: number = 10;

increaseBy(value: number):void{
    this.counter += value;
  }

decrementBy(value: number):void{
    this.counter -= value;
  }

  //hacer método para resetear el counter a 10

  reset(): void{
    this.counter =10;

  }
}
