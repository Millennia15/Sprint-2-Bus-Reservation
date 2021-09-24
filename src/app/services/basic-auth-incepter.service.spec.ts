import { TestBed } from '@angular/core/testing';

import { BasicAuthIncepterService } from './basic-auth-incepter.service';

describe('BasicAuthIncepterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthIncepterService = TestBed.get(BasicAuthIncepterService);
    expect(service).toBeTruthy();
  });
});
