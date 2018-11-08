import { TestBed } from '@angular/core/testing';

import { TahunAjarService } from './tahun-ajar.service';

describe('TahunAjarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TahunAjarService = TestBed.get(TahunAjarService);
    expect(service).toBeTruthy();
  });
});
