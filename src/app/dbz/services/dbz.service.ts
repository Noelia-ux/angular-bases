import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//Hacemos cambios para subirlo a git
@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    name: 'Krillinnn',
    power: 1000
  },{
    name:'Goku',
    power: 9500
  },{
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
