import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {KelasMasterService} from '../../../services/kelas-master.service';

@Component({
  selector: 'app-kelas-master',
  templateUrl: './kelas-master.component.html',
  styleUrls: ['./kelas-master.component.css']
})
export class KelasMasterComponent implements OnInit {

  form: FormGroup;
  dataTingkatan: any;

  constructor(private kelasService: KelasMasterService) { }


  initValue = {
      deskripsiKelas: "",
      namaKelas: "",
      namaUnikKelas: "",
      uuid: "",
      uuidTingkatan: {
        deskripsiTingkatan: "",
        tingkatan: "",
        uuid: ""
      }
    };

  // ini yang akan dikirim ke web api
  initForm(v = this.initValue) {
    return new FormBuilder().group({
      deskripsiKelas: [{value: v.deskripsiKelas, disabled: false}, Validators.required],
      uuid: [{value: v.uuid, disabled: false}],
      namaKelas: [{value: v.namaKelas, disabled: false}, Validators.required],
      namaUnikKelas: [{value: v.namaUnikKelas, disabled: false}, Validators.required],
      uuidTingkatan: new FormBuilder().group({
        uuid: v.uuidTingkatan.uuid
      })

    });
  }


  ngOnInit() {
    this.form = this.initForm();
    this.getDataJabatan();
  }

  saveData() {
    this.kelasService.postData(this.form.value).subscribe(value => console.log(value));
    this.form.patchValue(this.initValue);
  }

  getDataJabatan() {
    this.kelasService.getDataTingkatan().subscribe(
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
