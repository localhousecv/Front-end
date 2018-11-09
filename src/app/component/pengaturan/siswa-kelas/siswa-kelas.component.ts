import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SiswaKelasService} from '../../../services/pengaturan/siswa-kelas.service';
import {SiswaMasterService} from '../../../services/siswa-master.service';
import {KelasMasterService} from '../../../services/kelas-master.service';

@Component({
  selector: 'app-siswa-kelas',
  templateUrl: './siswa-kelas.component.html',
  styleUrls: ['./siswa-kelas.component.css']
})
export class SiswaKelasComponent implements OnInit {

  form: FormGroup;
  dataSiswa: any;
  dataKelas: any;

  constructor(
    private siswaKelasService: SiswaKelasService,
    private siswaMasterService: SiswaMasterService,
    private kelasMasterService: KelasMasterService) { }

  initValue = {
    pindahDariKelas: {
      uuid: '',
    },
    pindahKeKelas: {
      uuid: '',
    },
    statusAktif: true,
    uuid: '',
    uuidSiswa: {
      uuid: ''
    }
  };

  initForm(v = this.initValue) {
    return new FormBuilder().group({
      uuid: [{value: v.uuid, disabled: false}],
      statusAktif: true,
      pindahDariKelas: new FormBuilder().group({
        uuid: v.pindahDariKelas.uuid
      }),
      pindahKeKelas: new FormBuilder().group({
        uuid: v.pindahKeKelas.uuid
      }),
      uuidSiswa: new FormBuilder().group({
        uuid: v.uuidSiswa.uuid
      })
    });
  }

  ngOnInit() {
    this.form = this.initForm();
    this.getDataSiswa();
    this.getDataKelas();
  }
  saveData() {
    // response dari server (Harus di subscribe)
    this.siswaKelasService.postData(this.form.value).subscribe(
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

  getDataSiswa() {
    this.siswaMasterService.getData().subscribe(
      (v) => {
        console.log(v);
        this.dataSiswa = v['content'];
      },
      (error) => console.error('request anda error : ', error),
      () => {
      }
    );
  }
  getDataKelas() {
    this.kelasMasterService.getData().subscribe(
      (v) => {
        // console.log(v);
        this.dataKelas = v['content'];
      },
      (error) => console.error('request anda error : ', error),
      () => {
      }
    );
  }

}
