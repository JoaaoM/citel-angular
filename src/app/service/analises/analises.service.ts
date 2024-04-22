import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnalisesService {
  private apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getCalcularObesidadePorSexo(id: string | null):Observable<any> {
    const url = `${this.apiUrl}/analises/${id}/calcular-obesidade-por-sexo`;
    return this.http.get(url);
  }

  getPessoaPorEstado(id:string | null):Observable<any> {
    const url = `${this.apiUrl}/analises/${id}/pessoa-por-estado`;
    return this.http.get(url);
  }

  getMediaDeIdadePorTipoSanguineo(id: string | null):Observable<any> {
    const url = `${this.apiUrl}/analises/${id}/media-de-idade-por-tipo-sanguineo`;
    return this.http.get(url);
  }

  getImcMedioPorFaixaEtariaDeIdadeDeDezEmDezAnos(id: string | null):Observable<any> {
    const url = `${this.apiUrl}/analises/${id}/imc-medio-por-faixa-de-idade-dez-em-dez-anos`;
    return this.http.get(url);
  }

  getQuantidadeDeDoadoresPorTipoSanguineo(id: string | null):Observable<any> {
    const url = `${this.apiUrl}/analises/${id}/quantidade-de-doadores-por-tipo-sanguineo`;
    return this.http.get(url);
  }
}
