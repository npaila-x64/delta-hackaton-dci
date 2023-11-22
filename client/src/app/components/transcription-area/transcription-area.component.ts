import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-transcription-area',
  templateUrl: './transcription-area.component.html',
  styleUrls: ['./transcription-area.component.css']
})
export class TranscriptionAreaComponent {

  constructor(formService: FormService) { }

}
