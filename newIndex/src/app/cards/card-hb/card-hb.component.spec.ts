import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHBComponent } from './card-hb.component';

describe('CardHBComponent', () => {
  let component: CardHBComponent;
  let fixture: ComponentFixture<CardHBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
