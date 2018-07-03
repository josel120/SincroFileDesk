import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GLOBAL } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  name: string;
  constructor(private http: HttpClient) {}

  getAllCats(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/dowork');
  }

  getCat(name: string): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/dowork/' + name);
  }

  insertCat(cat: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/dowork/', cat);
  }

  updateCat(cat: any): Observable<void> {
    return this.http.put<void>('http://localhost:3000/api/dowork/' + 'jose', 'vaina');
  }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:3000/api/dowork/' + name);
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
/*
  login(user_to_login:any): Observable<any>{
    let user = JSON.stringify(user_to_login);
    //let params = {user:json};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
  //      'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<any>(`${GLOBAL.apiUrlLocal}/api/login/`, user, httpOptions)
      .pipe(map(res => JSON.parse(res)));
  }
  */

  loginCloud(user_to_login:any): Observable<any>{
    let user = JSON.stringify(user_to_login);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
  //      'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<any>(`${GLOBAL.apiUrlCloud}/nlogin.php`, user, httpOptions)
      .pipe(map(res => JSON.parse(res))); 
  }
//////////////////////////////////////////////////////////  
}
