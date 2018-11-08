import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TahunAjarService} from '../../../services/tahun-ajar.service';

@Component({
  selector: 'app-tahun-ajar',
  templateUrl: './tahun-ajar.component.html',
  styleUrls: ['./tahun-ajar.component.css']
})
export class TahunAjarComponent implements OnInit {

  form: FormGroup;

  constructor(private tahunAjarService: TahunAjarService) { }
  // nilai awal inputan dikosongkan
  initValue = {
    berakhirPadaTanggal: '',
    mulaiPadaTanggal: '',
    sebutanTahunAjar: '',
    tahunAjar: '',
    uuid: ''
  };
  initForm(v = this.initValue) {
    return new FormBuilder().group({
      berakhirPadaTanggal: [{value: v.berakhirPadaTanggal, disabled: false}, Validators.required],
      sebutanTahunAjar: [{value: v.berakhirPadaTanggal, disabled: false}, Validators.required],
      tahunAjar: [{value: v.tahunAjar, disabled: false}, Validators.required],
      mulaiPadaTanggal: [{value: v.mulaiPadaTanggal, disabled: false}, Validators.required]
    });
  }

  ngOnInit() {
    this.form = this.initForm();
  }
  saveData() {
    // response dari server (Harus di subscribe)
    this.tahunAjarService.postData(this.form.value).subscribe(
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
