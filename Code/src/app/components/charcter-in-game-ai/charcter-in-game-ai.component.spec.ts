import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharcterInGameAiComponent } from './charcter-in-game-ai.component';

describe('CharcterInGameAiComponent', () => {
  let component: CharcterInGameAiComponent;
  let fixture: ComponentFixture<CharcterInGameAiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharcterInGameAiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharcterInGameAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
