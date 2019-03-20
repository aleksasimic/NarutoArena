import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { Skill } from '../../models/skill';
import { GetFromDataBaseUser } from '../../store/actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private store$: Store<State>) { }
  
  @Input()
  public user:string;
  @Input()
  public pass:string;

  ngOnInit() {
    
  }
  login(){
    console.log("Username je",this.user,this.pass);
    this.store$.dispatch(new GetFromDataBaseUser(this.user,this.pass));
  }


}
