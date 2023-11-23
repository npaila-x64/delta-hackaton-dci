import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../models/solicitud';
import { SolicitudesService } from '../../services/solicitudes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  solicitudes: Solicitud[] = [];

  constructor(
    private solicitudesService: SolicitudesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.solicitudesService.obtenerSolicitudes().subscribe(
      (data: Solicitud[]) => {
          this.solicitudes = data;
      },
      error => {
          console.error('Error fetching solicitudes', error);
      }
  );
  }


  agregarSolicitud(): void {
      // const nuevaSolicitud: Solicitud = {
      //     id: '0',
      //     rut: '11111111-1',
      //     nombres: 'Juan',
      //     apellidoPaterno: 'Perez',
      //     apellidoMaterno: 'Mancilla',
      //     especialidad: 'Ficha Social',
      //     telefono: '+569 1234 5678',
      //     nombreDeLaUnidad: '',
      //     detalle: 'Necesito una ficha social',
      //     peticion: 'Alta',
      //     estado: 'Por evaluar'
      // };
      // this.solicitudes.push(nuevaSolicitud);
      this.router.navigate(['/ingreso']);
  }

  evaluarSolicitud(solicitudId: string): void {
    this.router.navigate(['/solicitudes', solicitudId]);
  }

}