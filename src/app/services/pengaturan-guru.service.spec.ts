import { TestBed } from '@angular/core/testing';

import { PengaturanGuruService } from './pengaturan-guru.service';

describe('PengaturanGuruService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PengaturanGuruService = TestBed.get(PengaturanGuruService);
    expect(service).toBeTruthy();
  });
});
