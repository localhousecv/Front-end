import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SikapKhususService} from '../../../services/pengaturan/sikap-khusus.service';

@Component({
  selector: 'app-sikap-khusus',
  templateUrl: './sikap-khusus.component.html',
  styleUrls: ['./sikap-khusus.component.css']
})
export class SikapKhususComponent implements OnInit {

  form: FormGroup;

  constructor(private keterampilanUmumService: SikapKhususService) { }

  initValue = {
    deskripsiJenisSikap: '',
    jenisSikap: '',
    singkatan: '',
    uuid: ''
  };

  initForm(v = this.initValue) {
    return new FormBuilder().group({
      uuid: v.uuid,
      deskripsiJenisSikap: [{value: v.deskripsiJenisSikap, disabled: false}, Validators.required],
      jenisSikap: [{value: v.jenisSikap, disabled: false}, Validators.required],
      singkatan: [{value: v.singkatan, disabled: false}, Validators.required]
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
