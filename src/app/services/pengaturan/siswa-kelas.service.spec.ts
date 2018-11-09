import { TestBed } from '@angular/core/testing';

import { SiswaKelasService } from './siswa-kelas.service';

describe('SiswaKelasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiswaKelasService = TestBed.get(SiswaKelasService);
    expect(service).toBeTruthy();
  });
});
