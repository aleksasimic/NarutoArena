import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Character } from '../../models/character';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import {  GameStartedAi } from '../../store/actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-team-ai-ingame',
  templateUrl: './team-ai-ingame.component.html',
  styleUrls: ['./team-ai-ingame.component.css']
})
export class TeamAiIngameComponent implements OnInit {

  aiingamecharacters$:Observable<Character[]>;
  
  @Output()
  public charClickedEventTeam: EventEmitter<Character> = new EventEmitter()


  constructor(private store$:Store<State>) { 
    this.aiingamecharacters$=this.store$.select(state=>state.aiteam);
  }

  ngOnInit() {
    this.store$.dispatch(new GameStartedAi());
  }

  onCharClickedTeam(character:Character){
   
    this.charClickedEventTeam.emit(character);
  }

}
