import { Component, OnInit,Input } from '@angular/core';
import { Character } from '../../models/character';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { Observable } from 'rxjs';
import { CharacterSelected, MyTeamCharacterAdded } from '../../store/actions';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() 
  public character: Character

  constructor(private store$:Store<State>) { }
  
  ngOnInit() {
  }
  selectCharacter(){
    this.store$.dispatch(new CharacterSelected(this.character));
    this.store$.dispatch(new MyTeamCharacterAdded(this.character));
  }
}
