import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Character } from '../../models/character';
import { Store } from '@ngrx/store';
import { State } from '../../store';
@Component({
  selector: 'app-charcter-in-game-ai',
  templateUrl: './charcter-in-game-ai.component.html',
  styleUrls: ['./charcter-in-game-ai.component.css']
})
export class CharcterInGameAiComponent implements OnInit {

  @Input() 
  public character: Character

  @Output()
  public charClickedEvent: EventEmitter<Character> = new EventEmitter()

  constructor(private store$:Store<State>) { }

  ngOnInit() {
  }
  charClick() {
    
    this.charClickedEvent.emit(this.character);
  }

}
