import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class PersonaService {
  url:string = "http://localhost/ppApi";
  datos:{};
  constructor(private http:HttpService) { }

  Traer(){
  this.http.getHttp(this.url+"/personas/traer").subscribe(data => this.datos = data);
  return this.datos;  
  }
  Borrar(id:string){
    let resultado=  this.http.deleteHttp(this.url+"/personas/borrar/"+id);  
    return resultado;
  }
  Insertar(nombre:string, sexo:string, mail:string,password:string,imagen:string){
    let resultado=  this.http.postHttp(this.url+"/personas/insertar" ,nombre,sexo, mail, password,imagen);
  return resultado;
  }
}
