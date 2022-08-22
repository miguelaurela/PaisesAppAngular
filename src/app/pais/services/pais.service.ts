import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl:string='https://restcountries.com/v3.1';
  
  BuscarPais(termino:string):Observable<Country[]>{
    const url =`${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url);
  }
  BuscarCapital(termino:string):Observable<Country[]>{
    const url =`${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url);
  }
  BuscarPaisPorAlpha(termino:string):Observable<Country[]>{
    const url =`${this.apiUrl}/alpha/${termino}`
    return this.http.get<Country[]>(url);
  }
  constructor(private http:HttpClient) { }
  
}
