import {Component, OnInit} from '@angular/core';
import {JabatanPegawaiServiceService} from '../../../services/jabatan-pegawai-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pegawai-jabatan',
  templateUrl: './pegawai-jabatan.component.html',
  styleUrls: ['./pegawai-jabatan.component.css']
})
export class PegawaiJabatanComponent implements OnInit {

  form: FormGroup;

  constructor(private jabatanService: JabatanPegawaiServiceService) {
  }

  // nilai awal inputan dikosongkan
  initValue = {
    uuid: '',
    namaJabatan: '',
    deskripsiJabatan: ''
  };

  // ini yang akan dikirim ke web api
  initForm(v = this.initValue) {
    return new FormBuilder().group({
      uuid: '',
      namaJabatan: [{value: v.namaJabatan, disabled: false}, Validators.required],
      deskripsiJabatan: [{value: v.deskripsiJabatan, disabled: false}, Validators.required]
    });
  }

  ngOnInit() {
    // set value pada form inputnya
    this.form = this.initForm();
  }

  saveData() {
    // response dari server (Harus di subscribe)
    this.jabatanService.postData(this.form.value).subscribe(
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
