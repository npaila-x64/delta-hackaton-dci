import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent {

  constructor(private formService: FormService, private router: Router) { }

  ingresarSolicitud(): void {
    this.formService.ingresarSolicitud();
    this.router.navigate(['/solicitudes']);
  }
}
