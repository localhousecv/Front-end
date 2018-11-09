import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JenisPenilaianKompetensiService {

  constructor(private http: HttpClient) { }

  postData(v) {
    return this.http.post('http://198.58.98.36:5000/api/pengaturan/jenispenilaiankompetensi/', v);
  }
}
