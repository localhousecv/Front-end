import { TestBed } from '@angular/core/testing';

import { KelasMasterService } from './kelas-master.service';

describe('KelasMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KelasMasterService = TestBed.get(KelasMasterService);
    expect(service).toBeTruthy();
  });
});
