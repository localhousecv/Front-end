import { Component, OnInit } from '@angular/core';
import { KeterampilanUmumService} from '../../../services/pengaturan/keterampilan-umum.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-keterampilan-umum',
  templateUrl: './keterampilan-umum.component.html',
  styleUrls: ['./keterampilan-umum.component.css']
})
export class KeterampilanUmumComponent implements OnInit {

  form: FormGroup;

  constructor(private keterampilanUmumService: KeterampilanUmumService) { }

  initValue = {
    deskripsiKeterampilan: '',
    namaKeterampilan: '',
    uuid: ''
  };

  initForm(v = this.initValue) {
    return new FormBuilder().group({
      uuid: v.uuid,
      namaKeterampilan: [{value: v.namaKeterampilan, disabled: false}, Validators.required],
      deskripsiKeterampilan: [{value: v.deskripsiKeterampilan, disabled: false}]
    });
  }

  ngOnInit() {
    this.form = this.initForm();
  }
  saveData() {
    // response dari server (Harus di subscribe)
    this.keterampilanUmumService.postData(this.form.value).subscribe(
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
