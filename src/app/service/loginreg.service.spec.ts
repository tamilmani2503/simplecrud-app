import { TestBed } from '@angular/core/testing';

import { LoginregService } from './loginreg.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginregService', () => {
  let service: LoginregService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(LoginregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
