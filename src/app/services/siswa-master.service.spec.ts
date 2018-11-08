import { TestBed } from '@angular/core/testing';

import { SiswaMasterService } from './siswa-master.service';

describe('SiswaMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiswaMasterService = TestBed.get(SiswaMasterService);
    expect(service).toBeTruthy();
  });
});
