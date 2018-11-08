import { TestBed } from '@angular/core/testing';

import { KelasTingkatanService } from './kelas-tingkatan.service';

describe('KelasTingkatanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KelasTingkatanService = TestBed.get(KelasTingkatanService);
    expect(service).toBeTruthy();
  });
});
