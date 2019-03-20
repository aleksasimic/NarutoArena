import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-chosen-characters',
  templateUrl: './chosen-characters.component.html',
  styleUrls: ['./chosen-characters.component.css']
})
export class ChosenCharactersComponent implements OnInit {

  charactersselected$:Observable<Character[]>;
    
  constructor(private store$:Store<State>) { 
    this.charactersselected$=this.store$.select(state=>state.charactersselected);

  }

  ngOnInit() {
  }

}
