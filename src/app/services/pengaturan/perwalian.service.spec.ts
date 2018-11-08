import { TestBed } from '@angular/core/testing';

import { PerwalianService } from './perwalian.service';

describe('PerwalianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerwalianService = TestBed.get(PerwalianService);
    expect(service).toBeTruthy();
  });
});
