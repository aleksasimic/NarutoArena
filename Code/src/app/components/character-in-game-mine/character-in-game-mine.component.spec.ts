import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInGameMineComponent } from './character-in-game-mine.component';

describe('CharacterInGameMineComponent', () => {
  let component: CharacterInGameMineComponent;
  let fixture: ComponentFixture<CharacterInGameMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInGameMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInGameMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
