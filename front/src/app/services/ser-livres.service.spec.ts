import { TestBed } from '@angular/core/testing';

import { SerLivresService } from './ser-livres.service';

describe('SerLivresService', () => {
  let service: SerLivresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerLivresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
