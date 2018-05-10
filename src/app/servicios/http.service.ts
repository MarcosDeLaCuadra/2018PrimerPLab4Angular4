import { Injectable } from '@angular/core';
import { log } from 'util';
import 'rxjs/add/operator/map'
import { Http, Response } from '@angular/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HttpService {

  constructor(private http:Http) { }


  getHttp(url:string){  
    return this.http
    .get( url ).map((res:Response) => res.json());   
  }

  deleteHttp(url:string){
    return  this.http.delete(url)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  postHttp(url:string,nombre:string,sexo:string, mail:string,password:string,imagen:string)  {
   
    return  this.http.post("http://localhost/ppApi/personas/insertar", {
       nombre: nombre,
       sexo: sexo, 
       mail: mail,
       password:password,
       imagen:imagen   
     })
       .subscribe(
         res => {
           console.log(res);
         },
         err => {
           console.log("Error occured");
         }
       );
   
   }
}
