import { TestBed } from '@angular/core/testing';

import { PegawaiMasterServiceService } from './pegawai-master-service.service';

describe('PegawaiMasterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PegawaiMasterServiceService = TestBed.get(PegawaiMasterServiceService);
    expect(service).toBeTruthy();
  });
});
