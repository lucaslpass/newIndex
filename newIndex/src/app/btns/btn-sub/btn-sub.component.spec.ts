import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSubComponent } from './btn-sub.component';

describe('BtnSubComponent', () => {
  let component: BtnSubComponent;
  let fixture: ComponentFixture<BtnSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
