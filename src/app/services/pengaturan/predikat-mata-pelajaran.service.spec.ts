import { TestBed } from '@angular/core/testing';

import { PredikatMataPelajaranService } from './predikat-mata-pelajaran.service';

describe('PredikatMataPelajaranService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredikatMataPelajaranService = TestBed.get(PredikatMataPelajaranService);
    expect(service).toBeTruthy();
  });
});
