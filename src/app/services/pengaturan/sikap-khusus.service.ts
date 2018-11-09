import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SikapKhususService {

  constructor(private http: HttpClient) { }

  postData(v) {
    return this.http.post('http://198.58.98.36:5000/api/pengaturan/sikapkhusus/', v);
  }
}
