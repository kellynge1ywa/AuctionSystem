import { TestBed } from '@angular/core/testing';

import { MyTokenService } from './my-token.service';

describe('MyTokenService', () => {
  let service: MyTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
