import { TestBed } from '@angular/core/testing';

import { SikapKhususService } from './sikap-khusus.service';

describe('SikapKhususService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SikapKhususService = TestBed.get(SikapKhususService);
    expect(service).toBeTruthy();
  });
});
