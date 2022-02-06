import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDeleteBackComponent } from './btn-delete-back.component';

describe('BtnDeleteBackComponent', () => {
  let component: BtnDeleteBackComponent;
  let fixture: ComponentFixture<BtnDeleteBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDeleteBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDeleteBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
