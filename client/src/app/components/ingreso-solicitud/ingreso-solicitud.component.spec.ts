import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoSolicitudComponent } from './ingreso-solicitud.component';

describe('IngresoSolicitudComponent', () => {
  let component: IngresoSolicitudComponent;
  let fixture: ComponentFixture<IngresoSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresoSolicitudComponent]
    });
    fixture = TestBed.createComponent(IngresoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
