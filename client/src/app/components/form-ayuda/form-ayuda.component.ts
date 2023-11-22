import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-form-ayuda',
  templateUrl: './form-ayuda.component.html',
  styleUrls: ['./form-ayuda.component.css']
})
export class FormAyudaComponent {

  constructor(formService: FormService) { }

}
