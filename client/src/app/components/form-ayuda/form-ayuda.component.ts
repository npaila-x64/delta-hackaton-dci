import { Component } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-form-ayuda',
  templateUrl: './form-ayuda.component.html',
  styleUrls: ['./form-ayuda.component.css']
})
export class FormAyudaComponent {
  nombres: string = ''
  apellidoPaterno: string = ''
  apellidoMaterno: string = ''
  rut: string = ''
  especialidad: string = ''
  telefono: string = ''
  unidad: string = ''
  detalle: string = ''
  peticion: string = ''

  constructor(private formService: FormService) {
    this.formService.solicitudSubject.subscribe((solicitud: Solicitud) => {
      console.log('Solicitud:', solicitud);
      this.nombres = solicitud.nombres;
      this.apellidoPaterno = solicitud.apellidoPaterno;
      this.apellidoMaterno = solicitud.apellidoMaterno;
      this.rut = solicitud.rut;
      this.especialidad = solicitud.especialidad;
      this.telefono = solicitud.telefono;
      this.unidad = solicitud.nombreDeLaUnidad;
      this.detalle = solicitud.detalle;
      this.peticion = solicitud.peticion;
    });
  }

}
