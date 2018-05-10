import { Component, OnInit, Output } from '@angular/core';
import { PersonaService } from './servicios/persona.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  title = 'app';
  dato:{};
  nombre:string;
  sexo:string;
  mail:string;
  password:string;
  imagen:string;
  cbx:string;
  
  constructor(private serPer:PersonaService){
   console.log( serPer.Traer());
  }
  Traer(){
    this.dato= this.serPer.Traer();   
  }

  Borrar(id:string){
    this.serPer.Borrar(id);
    this.Traer();
    
  }
  Insertar(){
    this.serPer.Insertar(this.nombre,this.sexo, this.mail, this.password, this.imagen);
  }

  Output(){

  }
  RecibirDato(dato:string){
    console.log(dato);
  }
}
