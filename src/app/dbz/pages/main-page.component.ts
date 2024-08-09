import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

constructor(private dbzService:DbzService){



  }

  get characters(): Character[] {
    return [...this.dbzService.characters]; //Con spreed hacemos una copia de cada uno de los personajes
  }

  onDeleteCharacter( id:string ){
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter(character: Character):void {
    this.dbzService.addCharacter(character);
  }
}
