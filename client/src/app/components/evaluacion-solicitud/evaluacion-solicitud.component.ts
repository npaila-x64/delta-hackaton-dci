import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Solicitud } from '../../models/solicitud';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluacion-solicitud',
  templateUrl: './evaluacion-solicitud.component.html',
  styleUrls: ['./evaluacion-solicitud.component.css']
})
export class EvaluacionSolicitudComponent implements OnInit {
  apiUrl = 'http://localhost:40401/solicitudes';
  solicitudId: string = '';

  nombres: string = ''
  apellidoPaterno: string = ''
  apellidoMaterno: string = ''
  rut: string = ''
  especialidad: string = ''
  telefono: string = ''
  unidad: string = ''
  detalle: string = ''
  peticion: string = ''

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
        return;
    }

    this.solicitudId = id;
    this.obtenerSolicitudPorId(id).subscribe(
        (data: Solicitud) => {
            this.nombres = data.nombres;
            this.apellidoPaterno = data.apellidoPaterno;
            this.apellidoMaterno = data.apellidoMaterno;
            this.rut = data.rut;
            this.especialidad = data.especialidad;
            this.telefono = data.telefono;
            this.unidad = data.nombreDeLaUnidad;
            this.detalle = data.detalle;
            this.peticion = data.peticion;
        },
        error => {
            console.error('Error fetching solicitudes', error);
        }
    );
  }
  
  aceptarSolicitud() {
    const body = {
      "id": this.solicitudId,
      "nombres": this.nombres,
      "apellidoPaterno": this.apellidoPaterno,
      "apellidoMaterno": this.apellidoMaterno,
      "rut": this.rut,
      "especialidad": this.especialidad,
      "nombreDeLaUnidad": this.unidad,
      "telefono": this.telefono,
      "detalle": this.detalle,
      "peticion": this.peticion,
      "estado": "Aceptada"
    }
    const url = `${this.apiUrl}/${this.solicitudId}`;
    this.http.put<any>(url, body).subscribe(
      (data: any) => {
        console.log('Solicitud aceptada', data);
      },
      error => {
        console.error('Error aceptando solicitud', error);
      }
    );
    this.router.navigate(['/solicitudes']);
  }

  rechazarSolicitud() {
    const body = {
      "id": this.solicitudId,
      "nombres": this.nombres,
      "apellidoPaterno": this.apellidoPaterno,
      "apellidoMaterno": this.apellidoMaterno,
      "rut": this.rut,
      "especialidad": this.especialidad,
      "nombreDeLaUnidad": this.unidad,
      "telefono": this.telefono,
      "detalle": this.detalle,
      "peticion": this.peticion,
      "estado": "Rechazada"
    }
    console.log('Rechazando solicitud', body);
    const url = `${this.apiUrl}/${this.solicitudId}`;
    this.http.put<any>(url, body).subscribe(
      (data: any) => {
        console.log('Solicitud rechazada', data);
      },
      error => {
        console.error('Error rechazando solicitud', error);
      }
    );
    this.router.navigate(['/solicitudes']);
  }

  obtenerSolicitudPorId(id: string): Observable<Solicitud> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Solicitud>(url);
  }
}