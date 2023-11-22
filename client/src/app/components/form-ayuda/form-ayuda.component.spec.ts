import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAyudaComponent } from './form-ayuda.component';

describe('FormAyudaComponent', () => {
  let component: FormAyudaComponent;
  let fixture: ComponentFixture<FormAyudaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAyudaComponent]
    });
    fixture = TestBed.createComponent(FormAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
