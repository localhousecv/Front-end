import { TestBed } from '@angular/core/testing';

import { JabatanPegawaiServiceService } from './jabatan-pegawai-service.service';

describe('JabatanPegawaiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JabatanPegawaiServiceService = TestBed.get(JabatanPegawaiServiceService);
    expect(service).toBeTruthy();
  });
});
