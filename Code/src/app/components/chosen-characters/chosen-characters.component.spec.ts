import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenCharactersComponent } from './chosen-characters.component';

describe('ChosenCharactersComponent', () => {
  let component: ChosenCharactersComponent;
  let fixture: ComponentFixture<ChosenCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
