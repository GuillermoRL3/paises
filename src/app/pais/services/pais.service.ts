import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contry } from '../interfaces/pais-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string ='https://restcountries.com/v2';
  
  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Contry[]>{
    
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Contry[]>(url);
  }

  buscarCapital(termino: string): Observable<Contry[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Contry[]>(url)
  }
  getPaisPorAlpha(id: string): Observable<Contry>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Contry>(url)
  }

}

