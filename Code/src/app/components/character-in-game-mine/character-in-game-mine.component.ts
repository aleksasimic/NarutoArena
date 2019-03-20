import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { Character } from '../../models/character';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-character-in-game-mine',
  templateUrl: './character-in-game-mine.component.html',
  styleUrls: ['./character-in-game-mine.component.css']
})
export class CharacterInGameMineComponent implements OnInit {
  
  @Input() 
  public character: Character
  @Input()
  public trenutneChakreChar:any[]=[];

  constructor(private store$:Store<State>) { }
  @Output()
  public izChara: EventEmitter<Skill> = new EventEmitter()

  ngOnInit() {
  }
  onClickSkill(skill:Skill){
    
    this.izChara.emit(skill);
  }

}
