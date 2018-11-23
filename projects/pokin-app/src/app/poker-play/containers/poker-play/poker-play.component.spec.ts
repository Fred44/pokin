import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerPlayComponent } from './poker-play.component';

describe('PokerPlayComponent', () => {
  let component: PokerPlayComponent;
  let fixture: ComponentFixture<PokerPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
