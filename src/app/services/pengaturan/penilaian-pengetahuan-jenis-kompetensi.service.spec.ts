import { TestBed } from '@angular/core/testing';

import { PenilaianPengetahuanJenisKompetensiService } from './penilaian-pengetahuan-jenis-kompetensi.service';

describe('PenilaianPengetahuanJenisKompetensiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PenilaianPengetahuanJenisKompetensiService = TestBed.get(PenilaianPengetahuanJenisKompetensiService);
    expect(service).toBeTruthy();
  });
});
