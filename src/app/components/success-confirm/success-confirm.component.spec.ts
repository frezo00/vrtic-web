import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessConfirmComponent } from './success-confirm.component';

describe('SuccessConfirmComponent', () => {
  let component: SuccessConfirmComponent;
  let fixture: ComponentFixture<SuccessConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
