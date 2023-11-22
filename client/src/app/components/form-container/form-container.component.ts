import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent {

  constructor(private formService: FormService) { }

  processForm() {
    this.formService.processForm();
  }

}
