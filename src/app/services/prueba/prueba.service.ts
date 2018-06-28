import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

//////////////////////////////////////////////////////////
}
