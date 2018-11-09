import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PredikatMataPelajaranService} from '../../../services/pengaturan/predikat-mata-pelajaran.service';

@Component({
  selector: 'app-predikat-mata-pelajaran',
  templateUrl: './predikat-mata-pelajaran.component.html',
  styleUrls: ['./predikat-mata-pelajaran.component.css']
})
export class PredikatMataPelajaranComponent implements OnInit {

  form: FormGroup;

  constructor(private predikatMataPelajaranService: PredikatMataPelajaranService) { }

  initValue = {
    batasAtas: '',
    batasBawah: '',
    predikat: '',
    uuid: ''
  };

  initForm(v = this.initValue) {
    return new FormBuilder().group({
      uuid: v.uuid,
      batasAtas: [{value: v.batasAtas, disabled: false}, Validators.required],
      batasBawah: [{value: v.batasBawah, disabled: false}, Validators.required],
      predikat: [{value: v.predikat, disabled: false}, Validators.required]
    });
  }

  ngOnInit() {
    this.form = this.initForm();
  }
  saveData() {
    // response dari server (Harus di subscribe)
    this.predikatMataPelajaranService.postData(this.form.value).subscribe(
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
