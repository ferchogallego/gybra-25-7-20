import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './pages/portada/portada.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlojamientoComponent } from './pages/alojamiento/alojamiento.component';
import { PasadiaComponent } from './pages/pasadia/pasadia.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    NavbarComponent,
    AlojamientoComponent,
    PasadiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
