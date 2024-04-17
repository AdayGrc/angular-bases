import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character-form.component.html',
  styleUrls: ['./add-character-form.component.css']
})
export class AddCharacterFormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();




  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {
    console.log(this.character)
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character.name = "";
    this.character.power = 0;
  }


}
