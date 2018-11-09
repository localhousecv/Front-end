import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaianPengetahuanJenisKompetensiComponent } from './penilaian-pengetahuan-jenis-kompetensi.component';

describe('PenilaianPengetahuanJenisKompetensiComponent', () => {
  let component: PenilaianPengetahuanJenisKompetensiComponent;
  let fixture: ComponentFixture<PenilaianPengetahuanJenisKompetensiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenilaianPengetahuanJenisKompetensiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenilaianPengetahuanJenisKompetensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
