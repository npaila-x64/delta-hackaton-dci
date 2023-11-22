import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAyudaComponent } from './components/form-ayuda/form-ayuda.component';
import { TranscriptionAreaComponent } from './components/transcription-area/transcription-area.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { IngresoSolicitudComponent } from './components/ingreso-solicitud/ingreso-solicitud.component';
import { ScanBarComponent } from './components/scan-bar/scan-bar.component';
import { FormContainerComponent } from './components/form-container/form-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAyudaComponent,
    TranscriptionAreaComponent,
    ImageContainerComponent,
    IngresoSolicitudComponent,
    ScanBarComponent,
    FormContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
