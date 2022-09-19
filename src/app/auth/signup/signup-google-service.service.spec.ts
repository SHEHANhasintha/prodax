import { TestBed } from '@angular/core/testing';

import { SignupGoogleServiceService } from './signup-google-service.service';

describe('SignupGoogleServiceService', () => {
  let service: SignupGoogleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupGoogleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
