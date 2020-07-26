import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaComponent } from './pages/portada/portada.component';
import { AlojamientoComponent } from './pages/alojamiento/alojamiento.component';


const routes: Routes = [
  { path: 'home', component: PortadaComponent},
  { path: 'alojamiento', component: AlojamientoComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
