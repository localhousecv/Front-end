import { TestBed } from '@angular/core/testing';

import { KelasPerwalianService } from './kelas-perwalian.service';

describe('KelasPerwalianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KelasPerwalianService = TestBed.get(KelasPerwalianService);
    expect(service).toBeTruthy();
  });
});
