import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMyIngameComponent } from './team-my-ingame.component';

describe('TeamMyIngameComponent', () => {
  let component: TeamMyIngameComponent;
  let fixture: ComponentFixture<TeamMyIngameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMyIngameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMyIngameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
