import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChakraListComponent } from './chakra-list.component';

describe('ChakraListComponent', () => {
  let component: ChakraListComponent;
  let fixture: ComponentFixture<ChakraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChakraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChakraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
