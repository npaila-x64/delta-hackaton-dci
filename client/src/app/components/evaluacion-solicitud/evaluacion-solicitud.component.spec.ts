import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionSolicitudComponent } from './evaluacion-solicitud.component';

describe('EvaluacionSolicitudComponent', () => {
  let component: EvaluacionSolicitudComponent;
  let fixture: ComponentFixture<EvaluacionSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluacionSolicitudComponent]
    });
    fixture = TestBed.createComponent(EvaluacionSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
