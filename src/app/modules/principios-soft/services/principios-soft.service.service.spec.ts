import { TestBed } from '@angular/core/testing';

import { PrincipiosSoftService } from './principios-soft.service.service';

describe('PrincipiosSoftService', () => {
  let service: PrincipiosSoftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipiosSoftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
