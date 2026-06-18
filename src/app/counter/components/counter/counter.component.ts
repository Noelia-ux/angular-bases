import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  //Las ticks me permiten hacer un stream multilinea
  // Y poder trabajar este template como si fuiera la parte del HTML
  template:  `
            <h3>
  Counter:{{ counter }}
</h3>
<button (click)="decrementBy(-1)">-1</button>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset()">Reset</button>

`
})

export class CounterComponent {
  constructor() {
  }
  public title: string = 'Hola Mundo';
  public counter = 10;

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
