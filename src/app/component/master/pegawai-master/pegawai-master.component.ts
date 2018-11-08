import {Component, OnInit} from '@angular/core';
import {PegawaiMasterServiceService} from '../../../services/pegawai-master-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pegawai-master',
  templateUrl: './pegawai-master.component.html',
  styleUrls: ['./pegawai-master.component.css']
})
export class PegawaiMasterComponent implements OnInit {

  dataJabatan: any;
  dataPegawai: any;
  form: FormGroup;

  constructor(private masterPegawaiService: PegawaiMasterServiceService) {
  }

  initValue = {
    uuid: '',
    agama: '',
    alamatPegawai: '',
    emailPegawai: '',
    fileFotoPegawai: '',
    hpPegawai: '',
    jenisKelamin: '',
    namaPegawai: '',
    nipPegawai: '',
    statusAktif: true,
    tanggalKeluar: '',
    tanggalLahir: '',
    tanggalMasuk: '',
    tempatLahir: '',
    uuidJabatan: {
      uuid: '',
      namaJabatan: '',
      deskripsiJabatan: ''
    }
  };

  getObject(paramater: string) {
    return (<FormGroup> this.form.get(paramater));
  }

  initForm(v = this.initValue) {
    return new FormBuilder().group({
      uuid: v.uuid,
      namaPegawai: [{value: v.namaPegawai, disabled: false}, Validators.required],
      nipPegawai: [{value: v.nipPegawai, disabled: false}, Validators.required],
      alamatPegawai: [{value: v.alamatPegawai, disabled: false}, Validators.required],
      hpPegawai: [{value: v.hpPegawai, disabled: false}, Validators.required],
      emailPegawai: [{value: v.emailPegawai, disabled: false}],
      fileFotoPegawai: '/assets/images/man.png',
      jenisKelamin: [{value: v.jenisKelamin, disabled: false}, Validators.required],
      agama: [{value: v.agama, disabled: false}, Validators.required],
      tanggalMasuk: [{value: v.tanggalMasuk, disabled: false}, Validators.required],
      tanggalKeluar: [{value: v.tanggalKeluar, disabled: false}, Validators.required],
      statusAktif: [{value: v.statusAktif, disabled: false}, Validators.required],
      tanggalLahir: [{value: v.tanggalLahir, disabled: false}, Validators.required],
      tempatLahir: [{value: v.tempatLahir, disabled: false}, Validators.required],
      uuidJabatan: new FormBuilder().group({
        uuid: v.uuidJabatan.uuid
      })

    });
  }


  ngOnInit() {
    this.getDataJabatan();
    this.getDataPegawai();
    this.form = this.initForm();
  }

  save(v) {
    this.masterPegawaiService.postData(v).subscribe(value => console.log(value));
    // this.form.patchValue(this.initValue);
  }

  getDataJabatan() {
    this.masterPegawaiService.getData().subscribe(
      (v) => {
        console.log(v);
        this.dataJabatan = v['content'];
      },
      (error) => console.error('request anda error : ', error),
      () => {
      }
    );
  }

  getDataPegawai() {
    this.masterPegawaiService.getDataPegawai().subscribe(
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
