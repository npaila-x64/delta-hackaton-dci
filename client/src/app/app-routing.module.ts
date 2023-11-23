import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoSolicitudComponent } from './components/ingreso-solicitud/ingreso-solicitud.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { EvaluacionSolicitudComponent } from './components/evaluacion-solicitud/evaluacion-solicitud.component';

const routes: Routes = [
  {
    path: 'ingreso',
    component: IngresoSolicitudComponent
  },
  {
    path: 'solicitudes',
    component: SolicitudesComponent
  },
  { path: 'solicitudes/:id', component: EvaluacionSolicitudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
