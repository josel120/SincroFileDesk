import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVainaComponent } from './tabla-vaina.component';

describe('TablaVainaComponent', () => {
  let component: TablaVainaComponent;
  let fixture: ComponentFixture<TablaVainaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaVainaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaVainaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
