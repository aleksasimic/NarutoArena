import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Character } from '../../models/character';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import {  GameStarted } from '../../store/actions';
import { Observable } from 'rxjs';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-team-my-ingame',
  templateUrl: './team-my-ingame.component.html',
  styleUrls: ['./team-my-ingame.component.css']
})
export class TeamMyIngameComponent implements OnInit {

  myingamecharacters$:Observable<Character[]>;
  
  @Input()
  public trenutneChakre:any[]=[];
  
  @Output()
  public izTeama: EventEmitter<Skill> = new EventEmitter()

  constructor(private store$:Store<State>) { 
    this.myingamecharacters$=this.store$.select(state=>state.myteam);
  }

  ngOnInit() {
    this.store$.dispatch(new GameStarted());
  }

  onClickSkillTeam(skill:Skill){
    this.izTeama.emit(skill);
  }

}
