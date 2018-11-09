import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JenisPenilaianKompetensiService} from '../../../services/pengaturan/jenis-penilaian-kompetensi.service';

@Component({
  selector: 'app-jenis-penilaian-kompetensi',
  templateUrl: './jenis-penilaian-kompetensi.component.html',
  styleUrls: ['./jenis-penilaian-kompetensi.component.css']
})
export class JenisPenilaianKompetensiComponent implements OnInit {

  form: FormGroup;

  constructor(private jenisPenilaianKompetensiService: JenisPenilaianKompetensiService) { }

  initValue = {
    deskripsiJenisPenilaian: '',
    namaJenisPenilaian: '',
    uuid: ''
  };

  initForm(v = this.initValue) {
    return new FormBuilder().group({
      uuid: v.uuid,
      deskripsiJenisPenilaian: [{value: v.deskripsiJenisPenilaian, disabled: false}],
      namaJenisPenilaian: [{value: v.namaJenisPenilaian, disabled: false}, Validators.required]
    });
  }

  ngOnInit() {
    this.form = this.initForm();
  }
  saveData() {
    // response dari server (Harus di subscribe)
    this.jenisPenilaianKompetensiService.postData(this.form.value).subscribe(
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
