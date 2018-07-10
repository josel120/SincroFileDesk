import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  constructor(private http: HttpClient) {
    console.log("servicio archivos");
   }

  listarArchivos(){
    /*
    var fs = require("fs");
    fs.readdir("C:\\Users\\Peruapps\\Documents\\vaina\\uno", function (err, destinationFiles) { 
      if (err) throw err; 
      console.log("adsdsd");
      return destinationFiles;
    });
    */
    
  }
  getProductos(): Observable<any>{
    return this.http.get<any[]>('http://localhost:3000/api/dowork');
  }

}
