import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {KelasTingkatanService} from '../../../services/kelas-tingkatan.service';

@Component({
  selector: 'app-kelas-tingkatan',
  templateUrl: './kelas-tingkatan.component.html',
  styleUrls: ['./kelas-tingkatan.component.css']
})
export class KelasTingkatanComponent implements OnInit {

  form: FormGroup;
  constructor(private kelasTingkatanService: KelasTingkatanService) { }

  // nilai awal inputan dikosongkan
  initValue = {
    uuid: '',
    tingkatan: '',
    deskripsiTingkatan: ''
  };

  // ini yang akan dikirim ke web api
  initForm(v = this.initValue) {
    return new FormBuilder().group({
      uuid: v.uuid,
      tingkatan: [{value: v.tingkatan, disabled: false}, Validators.required],
      deskripsiTingkatan: [{value: v.deskripsiTingkatan, disabled: false}, Validators.required]
    });
  }

  ngOnInit() {
    // set value pada form inputnya
    this.form = this.initForm();
  }

  saveData() {
    // response dari server (Harus di subscribe)
    this.kelasTingkatanService.postData(this.form.value).subscribe(
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
