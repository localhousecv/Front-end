import { TestBed } from '@angular/core/testing';

import { MataPelajaranKelasService } from './mata-pelajaran-kelas.service';

describe('MataPelajaranKelasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MataPelajaranKelasService = TestBed.get(MataPelajaranKelasService);
    expect(service).toBeTruthy();
  });
});
