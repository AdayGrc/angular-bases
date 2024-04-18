import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character-form.component.html',
  styleUrls: ['./add-character-form.component.css']
})

export class AddCharacterFormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0,

  }


  emitCharacter():void {
    if (this.character.name.length === 0) return(console.log("Error"));

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0, id: uuid() };
  }


}
