import { TestBed } from '@angular/core/testing';

import { KeterampilanUmumService } from './keterampilan-umum.service';

describe('KeterampilanUmumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeterampilanUmumService = TestBed.get(KeterampilanUmumService);
    expect(service).toBeTruthy();
  });
});
