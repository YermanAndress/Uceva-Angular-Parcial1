import { TestBed } from '@angular/core/testing';

import { ArqSoftwareService } from './arq-software.service';

describe('ArqSoftwareService', () => {
  let service: ArqSoftwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArqSoftwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
