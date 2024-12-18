import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { JuegoComponent } from './components/juego/juego.component';
import { PartidasComponent } from './pages/partidas/partidas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    JuegoComponent,
    PartidasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
