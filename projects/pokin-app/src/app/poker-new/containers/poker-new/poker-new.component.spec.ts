import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerNewComponent } from './poker-new.component';

describe('PokerNewComponent', () => {
  let component: PokerNewComponent;
  let fixture: ComponentFixture<PokerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
