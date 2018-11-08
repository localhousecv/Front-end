import { TestBed } from '@angular/core/testing';

import { MataPelajaranMasterService } from './mata-pelajaran-master.service';

describe('MataPelajaranMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MataPelajaranMasterService = TestBed.get(MataPelajaranMasterService);
    expect(service).toBeTruthy();
  });
});
