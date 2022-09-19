import { TestBed } from '@angular/core/testing';

import { GoogleLoginServiceService } from './google-login-service.service';

describe('GoogleLoginServiceService', () => {
  let service: GoogleLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
