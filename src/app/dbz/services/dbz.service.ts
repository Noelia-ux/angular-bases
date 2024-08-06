import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';


//Hacemos cambios para subirlo a git
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillj',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power: 9500
  },{
    id: uuid(),
    name:"Vegetaaa",
    power: 7500
  }];

 // onDelete = Index value: number;

  onNewCharacter(character:Character): void{
    this.characters.push(character);
  }

  onDeleteCharacter(index:number){

    //this.characters.splice(1,2)
    this.characters.splice(index,1);
  }

}
