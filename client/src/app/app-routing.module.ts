import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoSolicitudComponent } from './components/ingreso-solicitud/ingreso-solicitud.component';

const routes: Routes = [
  {
    path: 'ingreso',
    component: IngresoSolicitudComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
