import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GLOBAL } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  name: string;
  private httpOptions;
  private mensajeSource = new BehaviorSubject<any>("default message");
  currentMessage = this.mensajeSource.asObservable();

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
      //  'Content-Type':  'text/plain',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD',        
        'Access-Control-Allow-Origin': '*',
      //'Authorization': 'my-auth-token'
      })
    };
  }
  changeMessage(message: any){
    this.mensajeSource.next(message);
  }
   
  //////////////////////////////////////////////////////////
  ////fileSincro
  // ver archivos de una ubicacion origen
  getFilesSource(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/fileSincro');
  }

  // ver archivos de una ubicacion dada, siempre y cuando este en su ubicacion de origen
  getFilesByDir(name: string): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/fileSincro/' + name);
  }

  // sincronizar ubicacion de origen con ubicacion destino
  sincronizar(carpeta: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/fileSincro/', carpeta);
  }

  //////////////////////////////////////////////////////////
  loginCloud(user_to_login:any): Observable<any>{
    let user = JSON.stringify(user_to_login);
    let params = "user="+user;    
    return this.http.post<any>(`${GLOBAL.apiUrlCloud}/nlogin.php`, params, this.httpOptions)
      .pipe(map(res => res)); 
  }

  olvidarPassword(data){
    let user = JSON.stringify(data);
    let params = "user="+user;
    return this.http.post<any>(`${GLOBAL.apiUrlCloud}/ngpassword.php`, params, this.httpOptions)
      .pipe(map(res => res));
  }

  verificarPassword(data){
    let user = JSON.stringify(data);
    let params = "user="+user;
    return this.http.post<any>(`${GLOBAL.apiUrlCloud}/ngpassword.php`, params, this.httpOptions)
      .pipe(map(res => res));
  }

  changePassword(data){
    let user = JSON.stringify(data);
    let params = "user="+user;
    return this.http.post<any>(`${GLOBAL.apiUrlCloud}/ngpassword.php`, params, this.httpOptions)
      .pipe(map(res => res));
  }

  // Listar Archivos y carpetas
  /*
  listFileCloud(idUser:any): Observable<any>{
    let user = JSON.stringify(idUser);
    let params = "user="+user;
    return this.http.post<any>(`${GLOBAL.apiUrlCloud}/nlistarCarpetaArchivo.php`, params, this.httpOptions)
      .pipe(map(res => res));
  }
  */

  //Listar Carpetas y Archivos Principal
  listPrincipalFileCloud(idUser:any): Observable<any>{
    let user = JSON.stringify(idUser);
    let params = "user="+user;
    return this.http.post<any>(`${GLOBAL.apiUrlCloud}/nlistarCarpetaPrincipal.php`, params, this.httpOptions)
      .pipe(map(res => res));
  }

  // Listar Contenido de Carpeta Especifica
  listContentFileCloud(idUser:any): Observable<any>{
    let user = JSON.stringify(idUser);
    let params = "user="+user;
    return this.http.post<any>(`${GLOBAL.apiUrlCloud}/nlistarContenidoCarpeta.php`, params, this.httpOptions)
      .pipe(map(res => res));
  }

  // ver Detalles del Archivo Especifica
  detailsFileCloud(idUser:any): Observable<any>{
    let user = JSON.stringify(idUser);
    let params = "user="+user;
    return this.http.post<any>(`${GLOBAL.apiUrlCloud}/ngetItem.php`, params, this.httpOptions)
      .pipe(map(res => res));
  }

  // Descargar archivos
  /*downloadFile(row): Observable<any> {    
    let user = JSON.stringify(row);
    let params = "user="+user;
    return this.http.post<any>(`http://localhost:3000/api/download`, params, this.httpOptions)
      .pipe(map(res => res));
  }*/

  downloadFile(row): Observable<any> {    
    let user = JSON.stringify(row);
    let params = "user="+user;
    return this.http.post<any>(`http://localhost:3000/api/vaina`, params, this.httpOptions)
      .pipe(map(res => res));
  }
}
