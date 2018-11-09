import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {KelasPerwalianService} from '../../../services/pengaturan/kelas-perwalian.service';
import {PegawaiMasterServiceService} from '../../../services/pegawai-master-service.service';

@Component({
  selector: 'app-kelas-perwalian',
  templateUrl: './kelas-perwalian.component.html',
  styleUrls: ['./kelas-perwalian.component.css']
})
export class KelasPerwalianComponent implements OnInit {

  form: FormGroup;
  dataPegawai: any

  constructor(private kelasPerwalianService: KelasPerwalianService, private pegawaiService: PegawaiMasterServiceService) { }

  initValue = {
    note: '',
    statusAktif: true,
    tanggalAkhirPerwalian: '',
    tanggalMulaiPerwalian: '',
    uuid: '',
    uuidPegawai: {
      "uuid": "string",
    }
  };

  initForm(v = this.initValue) {
    return new FormBuilder().group({
      uuid: v.uuid,
      statusAktif: [{value: v.statusAktif, disabled: false}, Validators.required],
      tanggalAkhirPerwalian: [{value: v.tanggalAkhirPerwalian, disabled: false}, Validators.required],
      tanggalMulaiPerwalian: [{value: v.tanggalMulaiPerwalian, disabled: false}, Validators.required],
      note: [{value: v.note, disabled: false}, Validators.required],
      uuidPegawai: new FormBuilder().group({
        uuid: v.uuidPegawai.uuid
      })
    });
  }

  ngOnInit() {
    this.form = this.initForm();
    this.getDataPegawai();
  }
  saveData() {
    // response dari server (Harus di subscribe)
    this.kelasPerwalianService.postData(this.form.value).subscribe(
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

  getDataPegawai() {
    this.pegawaiService.getDataPegawai().subscribe(
      (v) => {
        console.log(v);
        this.dataPegawai = v['content'];
      },
      (error) => console.error('request anda error : ', error),
      () => {
      }
    );
  }
}
