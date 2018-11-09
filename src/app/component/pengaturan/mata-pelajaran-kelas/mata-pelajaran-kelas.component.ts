import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MataPelajaranKelasService} from '../../../services/pengaturan/mata-pelajaran-kelas.service';
import {MataPelajaranMasterService} from '../../../services/mata-pelajaran-master.service';

@Component({
  selector: 'app-mata-pelajaran-kelas',
  templateUrl: './mata-pelajaran-kelas.component.html',
  styleUrls: ['./mata-pelajaran-kelas.component.css']
})
export class MataPelajaranKelasComponent implements OnInit {

  form: FormGroup;
  dataMataPelajaran: any;

  constructor(private mataPelajaranKelasService: MataPelajaranKelasService, private mataPelajaranMasterService: MataPelajaranMasterService) { }

  initValue = {
    uuid: '',
    agagag: '',
    uuidMataPelajaran: {
      uuid: ''
    }
  };

  initForm(v = this.initValue) {
    return new FormBuilder().group({
      uuid: [{value: v.uuid, disabled: false}],
      uuidMataPelajaran: new FormBuilder().group({
        uuid: v.uuidMataPelajaran.uuid
      })
    });
  }

  ngOnInit() {
    this.form = this.initForm();
    this.getDataMataPelajaran();
  }
  saveData() {
    // response dari server (Harus di subscribe)
    this.mataPelajaranKelasService.postData(this.form.value).subscribe(
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

  getDataMataPelajaran() {
    this.mataPelajaranMasterService.getData().subscribe(
      (v) => {
        console.log(v);
        this.dataMataPelajaran = v['content'];
      },
      (error) => console.error('request anda error : ', error),
      () => {
      }
    );
  }

}
