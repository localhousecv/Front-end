import { TestBed } from '@angular/core/testing';

import { KurikulumService } from './kurikulum.service';

describe('KurikulumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KurikulumService = TestBed.get(KurikulumService);
    expect(service).toBeTruthy();
  });
});
