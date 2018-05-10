import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
///
import { PersonaService } from './servicios/persona.service';
import { HttpService } from './servicios/http.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AltaComponent } from './alta/alta.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    PersonaService,
    HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
