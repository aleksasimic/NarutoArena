import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAiIngameComponent } from './team-ai-ingame.component';

describe('TeamAiIngameComponent', () => {
  let component: TeamAiIngameComponent;
  let fixture: ComponentFixture<TeamAiIngameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAiIngameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAiIngameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
