import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../../models/skill';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { Observable } from 'rxjs';
import { CharacterSelected, MyTeamCharacterAdded } from '../../store/actions';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() 
  public skill: Skill

  @Input() 
  public enough: any;

  @Output()
  public clickedEvent: EventEmitter<Skill> = new EventEmitter()

  constructor(private store$:Store<State>) { }

  ngOnInit() {
  }

  clickedSkill()
  {
    console.log("U SKILL COMPONENTU",this.skill);
    this.clickedEvent.emit(this.skill);
  }


}
