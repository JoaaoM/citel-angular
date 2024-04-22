import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImportacaoService {
  private apiUrl = 'http://localhost:8080/importacoes';

  constructor(private http: HttpClient) {}

  getAllImportacoes(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get(url);
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('jsonFile', file, file.name);
    return this.http.post(this.apiUrl, formData, { responseType: 'text' });
  }
}
