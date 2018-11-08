import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {KurikulumService} from '../../../services/pengaturan/kurikulum.service';
import {TahunAjarService} from '../../../services/tahun-ajar.service';

@Component({
  selector: 'app-kurikulum',
  templateUrl: './kurikulum.component.html',
  styleUrls: ['./kurikulum.component.css']
})
export class KurikulumComponent implements OnInit {

  form: FormGroup;
  dataTahunAjar: any;

  constructor(private kurikulumService: KurikulumService, private tahunAjarService: TahunAjarService) {
  }

  initValue = {
    uuid: '',
    semester: '',
    uuidTahunAjar: ''
  };


  initForm(v = this.initValue) {
    return new FormBuilder().group({
      uuid: v.uuid,
      semester: [{value: v.semester, disabled: false}, Validators.required],
      uuidTahunAjar: [{value: v.uuidTahunAjar, disabled: false}, Validators.required]
    });
  }

  ngOnInit() {
    this.form = this.initForm();
    this.getDataTahunAjar();
  }

  save(v) {
    this.kurikulumService.postData(v).subscribe(value => console.log(value));
    this.form.patchValue(this.initValue);
  }

  getDataTahunAjar() {
    this.tahunAjarService.getData().subscribe(
      (v) => {
        console.log(v);
        this.dataTahunAjar = v['content'];
      },
      (error) => console.error('request anda error : ', error),
      () => {
      }
    );
  }

}
