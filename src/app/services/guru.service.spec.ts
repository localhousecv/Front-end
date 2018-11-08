import { TestBed } from '@angular/core/testing';

import { GuruService } from './guru.service';

describe('GuruService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuruService = TestBed.get(GuruService);
    expect(service).toBeTruthy();
  });
});
