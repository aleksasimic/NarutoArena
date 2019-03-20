import { Component, OnInit, Input } from '@angular/core';
import {Skill} from '../../models/skill';
import * as DoMoveService from '../../services/do.move.service';
import { State } from '../../store';
import {Store} from '@ngrx/store';
import { Character } from '../../models/character';
import { DoMove } from '../../store/actions';
import {DoMoveAi} from '../../store/actions';
import * as ai from '../../services/ai.move.service';
@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.component.html',
  styleUrls: ['./in-game.component.css']
})
export class InGameComponent implements OnInit {

  constructor(private doMoveService:DoMoveService.DoMoveService,private store$: Store<State>,private doMoveServiceAi:ai.AiMoveService) {}

  private nizchakri:any[]=[];
  public timer:any;
  ngOnInit() {
    this.gimmeChakra();
    this.timer=20;
    this.timeout();
  }
  onClickSkillInGame(skill:Skill){
    console.log("U ON KLIK EVENT U INGAME SAM!!!!!",skill);
    this.doMoveService.addSkill(skill);
    console.log(this.doMoveService.getSkills);

  }
  onClickCharGame(char:Character){
    console.log("U ON KLIK EVENTU U INGAME SAM!!!!",char);
    this.doMoveService.addChar(char);

  }
  doMove(){
    console.log("U do move sam");
    
    this.store$.dispatch(new DoMove(this.doMoveService.getSkills(),this.doMoveService.getChars()));
    this.doMoveService.removeAll();

    this.doMoveServiceAi.generateMove();
    console.log("SKILLOVI NA MENI",this.doMoveServiceAi.getAiSkills());
    this.store$.dispatch(new DoMoveAi(this.doMoveServiceAi.getAiSkills(),this.doMoveServiceAi.getAiChars()));
    
    
    this.doMoveServiceAi.remove();

    this.gimmeChakra();
    this.refreshTimer();

  }
  gimmeChakra(){
    this.nizchakri[0]=0;
    this.nizchakri[1]=0;
    this.nizchakri[2]=0;
    this.nizchakri[3]=0;

    let pom1=Math.floor((Math.random() * 4) + 1);
    let pom2=Math.floor((Math.random() * 4) + 1);
    let pom3=Math.floor((Math.random() * 4) + 1);
    let pom4=Math.floor((Math.random() * 4) + 1);

    this.nizchakri[pom1-1]++;
    this.nizchakri[pom2-1]++;
    this.nizchakri[pom3-1]++;
    this.nizchakri[pom4-1]++;
  }
  timeout(){
    this.timer=this.timer-1;
    let that=this;
    setTimeout(function () {
      console.log(that.timer);
      that.timeout();
      if(that.timer==0)
      {
       that.refreshTimer();
      }
  }, 1000);
  }
  refreshTimer(){
    this.timer=20;
  }
}
