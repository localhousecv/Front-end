import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiswaMasterService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://198.58.98.36:5000/api/master/siswa/?page=0&size=5');
  }
  postData(v) {
    return this.http.post('http://198.58.98.36:5000/api/master/siswa/', v);
  }

}
