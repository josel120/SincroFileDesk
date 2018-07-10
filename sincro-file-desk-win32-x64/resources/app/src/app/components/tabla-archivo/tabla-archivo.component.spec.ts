
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaArchivoComponent } from './tabla-archivo.component';

describe('TablaArchivoComponent', () => {
  let component: TablaArchivoComponent;
  let fixture: ComponentFixture<TablaArchivoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaArchivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
