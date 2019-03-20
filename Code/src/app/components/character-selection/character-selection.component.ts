import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { GetFromDatabase } from '../../store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent implements OnInit {

  characters$:Observable<Character[]>;
  
  @Input() 
  public characterselected: Character
  
  constructor(private store$:Store<State>) { 
    this.characters$=this.store$.select(state=>state.characters);

  }

  ngOnInit() {
    this.store$.dispatch(new GetFromDatabase());
  }

}
