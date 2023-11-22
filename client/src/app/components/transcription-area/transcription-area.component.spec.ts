import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptionAreaComponent } from './transcription-area.component';

describe('TranscriptionAreaComponent', () => {
  let component: TranscriptionAreaComponent;
  let fixture: ComponentFixture<TranscriptionAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranscriptionAreaComponent]
    });
    fixture = TestBed.createComponent(TranscriptionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
