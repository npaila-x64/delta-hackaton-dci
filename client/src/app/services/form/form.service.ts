import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Solicitud } from 'src/app/models/solicitud';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  public imageUrlSubject = new Subject<any>();
  public solicitudSubject = new Subject<any>();
  public loadingSubject = new Subject<any>();
  private selectedFile: File | null = null;

  solicitud: Solicitud = {
    id: '-',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '', 
    rut: '',
    telefono: '',
    nombreDeLaUnidad: '',
    especialidad: '',
    detalle: '',
    peticion: '',
    estado: 'Por evaluar'
  };

  constructor(private http: HttpClient) { }

  ingresarSolicitud() {
    const body = {
      "nombres": this.solicitud.nombres,
      "apellidoPaterno": this.solicitud.apellidoPaterno,
      "apellidoMaterno":  this.solicitud.apellidoMaterno,
      "rut": this.solicitud.rut,
      "especialidad": this.solicitud.especialidad,
      "nombreDeLaUnidad": this.solicitud.nombreDeLaUnidad,
      "telefono": this.solicitud.telefono,
      "detalle": this.solicitud.detalle,
      "peticion": this.solicitud.peticion,
    }
    console.log('Ingresando solicitud', body);
    this.http.post<any>('http://localhost:40401/solicitudes', body).subscribe(
      (data: any) => {
        console.log('Solicitud ingresada', data);
      },
      error => {
        console.error('Error ingresando solicitud', error);
      }
    );
  }

  displaySolicitud(solicitudObject: any) {
    this.solicitud['nombres'] = solicitudObject['NOMBRES'];
    this.solicitud['apellidoPaterno'] = solicitudObject['APELLIDO PATERNO'];
    this.solicitud['apellidoMaterno'] = solicitudObject['APELLIDO MATERNO'];
    this.solicitud['rut'] = solicitudObject['RUT'];
    this.solicitud['telefono'] = solicitudObject['TELÉFONO'];
    this.solicitud['nombreDeLaUnidad'] = solicitudObject['NOMBRE DE LA UNIDAD'];
    this.solicitud['especialidad'] = solicitudObject['ESPECIALIDAD DEL FUNCIONARIO'];
    this.solicitud['detalle'] = solicitudObject['DETALLE SITUACIÓN ECONOMICA'];
    this.solicitud['peticion'] = solicitudObject['PETICIÓN ESPECÍFICA'];
    this.solicitudSubject.next(this.solicitud);
  }

  setSelectedFile(file: File) {
    this.selectedFile = file;
    this.loadImageUrl();
  }

  private loadImageUrl() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (event) => {
        if (event.target) {
          const imageUrl = event.target.result
          this.imageUrlSubject.next(imageUrl);
        }
      };
    }
  }

  transcribeImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
        if (reader.result) {
          if (typeof reader.result === 'string') {
            this.sendImageToBackend(reader.result.replace(/^.+?;base64,/, ''));
          }
        }
      };
    }
  }

  sendImageToBackend(base64Image: string) {
    const url = 'http://localhost:30301/image';
    console.log('Sending image to backend...');
    this.loadingSubject.next(true);
    this.http.post(url, { content: base64Image }).subscribe(response => {
      console.log('Image sent successfully', response);
      console.log(response);
      this.displaySolicitud(response);
      this.loadingSubject.next(false);
    }, error => {
      console.error('Error sending image', error);
      this.loadingSubject.next(false);
    });
  }
}
