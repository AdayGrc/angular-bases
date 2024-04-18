import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid'
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] =[
    {
      id: uuid(),
      name: "Trunks",
      power: 10

    }
  ]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id: string):void {
    if( !id ) return
    console.log({id})
    this.onDelete.emit(id)
  }

}
