import { TestBed } from '@angular/core/testing';

import { JenisPenilaianKompetensiService } from './jenis-penilaian-kompetensi.service';

describe('JenisPenilaianKompetensiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JenisPenilaianKompetensiService = TestBed.get(JenisPenilaianKompetensiService);
    expect(service).toBeTruthy();
  });
});
