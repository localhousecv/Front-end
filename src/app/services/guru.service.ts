import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuruService {

  constructor(private http: HttpClient) { }

  postData(datanya) {
    return this.http.post('http://localhost/web_balai/admin/berita_rest', datanya);
  }

}
