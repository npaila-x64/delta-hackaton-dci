import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanBarComponent } from './scan-bar.component';

describe('ScanBarComponent', () => {
  let component: ScanBarComponent;
  let fixture: ComponentFixture<ScanBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScanBarComponent]
    });
    fixture = TestBed.createComponent(ScanBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
