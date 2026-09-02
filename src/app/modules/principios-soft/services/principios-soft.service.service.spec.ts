import { TestBed } from '@angular/core/testing';

import { PrincipiosSoftServiceService } from './principios-soft.service.service';

describe('PrincipiosSoftServiceService', () => {
  let service: PrincipiosSoftServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipiosSoftServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
