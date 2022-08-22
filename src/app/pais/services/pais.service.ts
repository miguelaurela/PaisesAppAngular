import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl:string='https://restcountries.com/v2';
  get httpParams(){
    return new HttpParams()
    .set('fields','name,capital,alpha2Code,flag,population')
  }
  
  BuscarPais(termino:string):Observable<Country[]>{
    const url =`${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url);
  }
  BuscarCapital(termino:string):Observable<Country[]>{
    const url =`${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }
  BuscarPaisPorAlpha(termino:string):Observable<Country[]>{
    const url =`${this.apiUrl}/alpha/${termino}`
    return this.http.get<Country[]>(url);
  }
  BuscarRegion(termino:string):Observable<Country[]>{
    const params=new HttpParams()
    .set('fields','name,capital,alpha2Code,flag,population');
    const url =`${this.apiUrl}/regionalbloc/${termino}`
    return this.http.get<Country[]>(url,{params})
    .pipe(
      tap(console.log)
    );

  }
  
  constructor(private http:HttpClient) { }
  
}
