import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChakraComponent } from './chakra.component';

describe('ChakraComponent', () => {
  let component: ChakraComponent;
  let fixture: ComponentFixture<ChakraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChakraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChakraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
