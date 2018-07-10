import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidarPasswordModelComponent } from './olvidar-password-model.component';

describe('OlvidarPasswordModelComponent', () => {
  let component: OlvidarPasswordModelComponent;
  let fixture: ComponentFixture<OlvidarPasswordModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlvidarPasswordModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidarPasswordModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
