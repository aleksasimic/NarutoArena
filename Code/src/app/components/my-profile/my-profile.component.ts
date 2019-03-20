import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import {Store} from '@ngrx/store'
import { State } from '../../store';
import { Observable } from 'rxjs';
import { GetFromDataBaseUser } from '../../store/actions';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  
  
  users$:Observable<User[]>;
  
  constructor(private store$: Store<State>) { 
    this.users$=this.store$.select(state=>state.user)
  }

  ngOnInit() {
    //this.store$.dispatch(new GetFromDataBaseUser("Morpheus13"));
  }

}
