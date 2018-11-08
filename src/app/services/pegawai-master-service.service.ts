import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PegawaiMasterServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://198.58.98.36:5000/api/master/jabatan/?page=0&size=5');
  }

  getDataPegawai() {
    return this.http.get('http://198.58.98.36:5000/api/master/pegawai/?page=0&size=10');
  }
  postData(v) {
    return this.http.post('http://198.58.98.36:5000/api/master/pegawai/', v);
  }


}
