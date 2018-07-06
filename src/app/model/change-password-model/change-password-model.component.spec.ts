import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordModelComponent } from './change-password-model.component';

describe('ChangePasswordModelComponent', () => {
  let component: ChangePasswordModelComponent;
  let fixture: ComponentFixture<ChangePasswordModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
