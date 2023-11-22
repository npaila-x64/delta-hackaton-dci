import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-ingreso-solicitud',
  templateUrl: './ingreso-solicitud.component.html',
  styleUrls: ['./ingreso-solicitud.component.css']
})
export class IngresoSolicitudComponent {
  isLoading: boolean = false;

  constructor(private formService: FormService) {
    this.formService.loadingSubject.subscribe((isLoading: boolean) => {
      console.log('isLoading:', isLoading);
      this.isLoading = isLoading;
    });
  }

}
