import { TestBed } from '@angular/core/testing';

import { AngstorageService } from './angstorage.service';

describe('AngstorageService', () => {
  let service: AngstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
