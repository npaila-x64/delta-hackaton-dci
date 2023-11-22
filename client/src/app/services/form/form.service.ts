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
    id: 0,
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '', 
    rut: '',
    telefono: '',
    nombreDeLaUnidad: '',
    montoEnPalabras: ''
  };

  constructor(private http: HttpClient) { }

  processForm() {
    console.log('FormService initialized');
    const solicitudObject = {
      "DEPARTAMENTO RECURSOS HUMANOS": "PRO DRH 21",
      "DEPARTAMENTO BIENESTAR SOCIAL": "",
      "ANEXO C": "",
      "CERTIFICADO DE AYUDA ECONÓMICA N°": "",
      "CERTIFICACION": "EL/LA JEFE/A O ENCARGADO/A DEL DEPARTAMENTO DE BIENESTAR SOCIAL DE LA DIRECCIÓN GENERAL DE AERONAUTICA CIVIL QUE SUSCRIBE, CERTIFICA QUE HA OTORGADO UNA AYUDA ECONÓMICA AL FUNCIONARIO QUE A CONTINUACIÓN SE INDICA POR EL MONTO QUE SE INDICA:",
      "IDENTIFICACIÓN DEL SOLICITANTE": {
          "APELLIDO PATERNO": "Molina",
          "APELLIDO MATERNO": "Perez",
          "NOMBRES": "Sebastian Alfonso",
          "RUT": "17.678.519-4",
          "ESPECIALIDAD DEL FUNCIONARIO": "Mecánico",
          "AÑOS DE SERVICIOS": "",
          "NOMBRE DE LA UNIDAD": "Operación de Planta",
          "TELÉFONO": "+56976489179"
      },
      "MONTO": "Un Millón de pesos chilenos",
      "OBSERVACIONES": "PREVIO ESTUDIO DE LA SOLICITUD PRESENTADA Y DEL INFORME SOCIAL DEL DEPARTAMENTO BIENESTAR SOCIAL.",
      "FIRMA FUNCIONARIO/A": "",
      "ASISTENTE SOCIAL FIRMA Y TIMBRE": "",
      "JEFE/A O ENCARGADO/A DEPTO. BIENESTAR SOCIAL": "",
      "Página": "18",
      "Enmienda": "Enm.2 ED.3/JUL 2020"
    }
  }

  displaySolicitud(solicitudObject: any) {
    this.solicitud['nombres'] = solicitudObject['NOMBRES'];
    this.solicitud['apellidoPaterno'] = solicitudObject['APELLIDO PATERNO'];
    this.solicitud['apellidoMaterno'] = solicitudObject['APELLIDO MATERNO'];
    this.solicitud['rut'] = solicitudObject['RUT'];
    this.solicitud['telefono'] = solicitudObject['TELÉFONO'];
    this.solicitud['nombreDeLaUnidad'] = solicitudObject['NOMBRE DE LA UNIDAD'];
    this.solicitud['montoEnPalabras'] = solicitudObject['MONTO'];
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
