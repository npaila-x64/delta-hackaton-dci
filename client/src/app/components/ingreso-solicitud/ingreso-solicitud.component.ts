import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-ingreso-solicitud',
  templateUrl: './ingreso-solicitud.component.html',
  styleUrls: ['./ingreso-solicitud.component.css']
})
export class IngresoSolicitudComponent {

  constructor(formService: FormService) { }

}
