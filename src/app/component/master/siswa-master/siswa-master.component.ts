import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {KelasTingkatanService} from '../../../services/kelas-tingkatan.service';
import {SiswaMasterService} from '../../../services/siswa-master.service';

@Component({
  selector: 'app-siswa-master',
  templateUrl: './siswa-master.component.html',
  styleUrls: ['./siswa-master.component.css']
})
export class SiswaMasterComponent implements OnInit {

  form: FormGroup;
  dataTingkatan: any;
  constructor(private kelasTingkatanService: KelasTingkatanService, private siswaMasterService: SiswaMasterService) {
  }

  initValue = {
    agama: '',
    alamatSiswa: '',
    anakKe: '',
    asalSekolah: '',
    diterimaDikelas: {
      uuid: ''
    },
    diterimaPadaTanggal: '',
    jenisKelamin: '',
    namaAyah: '',
    namaIbu: '',
    namaSiswa: '',
    namaWali: '',
    nomorInduk: '',
    nomorTelepon: '',
    nomorTeleponWali: '',
    pekerjaanAyah: '',
    pekerjaanIbu: '',
    pekerjaanWali: '',
    statusDiKeluarga: '',
    tanggalLahir: '',
    tempatLahir: '',
    uuid: ''
  };


  // ini yang akan dikirim ke web api
  initForm(v = this.initValue) {
    return new FormBuilder().group({
      agama: [{value: v.agama, disabled: false}, Validators.required],
      alamatSiswa: [{value: v.alamatSiswa, disabled: false}],
      anakKe: [{value: v.anakKe, disabled: false}],
      asalSekolah: [{value: v.asalSekolah, disabled: false}],
      diterimaDikelas: new FormBuilder().group({
        uuid: v.diterimaDikelas.uuid
      }),
      diterimaPadaTanggal: [{value: v.diterimaPadaTanggal, disabled: false}],
      jenisKelamin: [{value: v.jenisKelamin, disabled: false}, Validators.required],
      namaAyah: [{value: v.namaAyah, disabled: false}, Validators.required],
      namaIbu: [{value: v.namaIbu, disabled: false}, Validators.required],
      namaSiswa: [{value: v.namaSiswa, disabled: false}, Validators.required],
      namaWali: [{value: v.namaWali, disabled: false}],
      nomorInduk: [{value: v.nomorInduk, disabled: false}, Validators.required],
      nomorTelepon: [{value: v.nomorTelepon, disabled: false}, Validators.required],
      nomorTeleponWali: [{value: v.nomorTeleponWali, disabled: false}],
      pekerjaanAyah: [{value: v.pekerjaanAyah, disabled: false}],
      pekerjaanIbu: [{value: v.pekerjaanIbu, disabled: false}],
      pekerjaanWali: [{value: v.pekerjaanWali, disabled: false}],
      statusDiKeluarga: [{value: v.statusDiKeluarga, disabled: false}],
      tanggalLahir: [{value: v.tanggalLahir, disabled: false}, Validators.required],
      tempatLahir: [{value: v.tempatLahir, disabled: false}, Validators.required],
      uuid: ''
    });
  }

  ngOnInit() {
    this.form = this.initForm();
    this.getDataKelas();
  }

  saveData() {
    // response dari server (Harus di subscribe)
    this.siswaMasterService.postData(this.form.value).subscribe(
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

  getDataKelas() {
    this.kelasTingkatanService.getDataTingkatan().subscribe(
      (v) => {
        console.log(v);
        this.dataTingkatan = v['content'];
      },
      (error) => console.error('request anda error : ', error),
      () => {
      }
    );

  }
}
