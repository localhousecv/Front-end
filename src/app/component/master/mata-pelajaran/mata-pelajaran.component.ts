import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MataPelajaranMasterService} from '../../../services/mata-pelajaran-master.service';

@Component({
  selector: 'app-mata-pelajaran',
  templateUrl: './mata-pelajaran.component.html',
  styleUrls: ['./mata-pelajaran.component.css']
})
export class MataPelajaranComponent implements OnInit {

  form: FormGroup;
  data: any;

  constructor(private mataPelajaranService: MataPelajaranMasterService) { }

  // nilai awal inputan dikosongkan
  initValue = {
    uuid: '',
    namaMataPelajaran: '',
    deskripsiMataPelajaran: ''
  };

  // ini yang akan dikirim ke web api
  initForm(v = this.initValue) {
    return new FormBuilder().group({
      uuid: '',
      namaMataPelajaran: [{value: v.namaMataPelajaran, disabled: false}, Validators.required],
      deskripsiMataPelajaran: [{value: v.deskripsiMataPelajaran, disabled: false}, Validators.required]
    });
  }


  ngOnInit() {
    this.form = this.initForm();
    this.getDataMapel();
  }

  getDataMapel() {
    this.mataPelajaranService.getData().subscribe(
      (v) => {
        console.log(v);
        this.data = v['content'];
      },
      (error) => console.error('request anda error : ', error),
      () => {
      }
    );
    // kosongkan form isian
    this.form.patchValue(this.initValue);

  }

  saveData() {
    // response dari server (Harus di subscribe)
    this.mataPelajaranService.postData(this.form.value).subscribe(
      // proses selesai dan tidak terjadi error
      (res) => {
        console.log(res);
        this.form.patchValue(res);
      },

      // jika terjadi error
      (e) => console.log('gagal', e),

      // proses slesai entah error atau tidak
      () => console.log('Berhasil')
    );
    // kosongkan form isian
    this.form.patchValue(this.initValue);
  }


}
