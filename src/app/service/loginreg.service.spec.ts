import { TestBed } from '@angular/core/testing';

import { LoginregService } from './loginreg.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginregService', () => {
  let service: LoginregService;
  const user = {
    "firstName": "Hello",
    "lastName": "Tamil",
    "userName": "teamcheck.31",
    "password": "Password@1",
    "emailAddress": "test@rest.com",
    "registrationDate": "20/08/2020",
    "userId": 196051213,
    "id": 1
  };
  const users = [  {
    "firstName": "axis",
    "lastName": "bank",
    "userName": "axischeck.31",
    "password": "Password@1",
    "emailAddress": "test@rest.com",
    "registrationDate": "20/08/2020",
    "userId": 141298567,
    "id": 2
  },
  {
    "firstName": "hdfc",
    "lastName": "bank",
    "userName": "hdfc121",
    "password": "Password@1",
    "emailAddress": "hdfc@test.com",
    "registrationDate": "20/08/2020",
    "userId": 635644126,
    "id": 3
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[LoginregService]
    });
    service = TestBed.inject(LoginregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find the user in directory', () => {
    service.doLogin('hdfc121').subscribe(user => {
      expect(user.userName).toEqual('hdfc121');
    });
  });

  it('should add the user to directory',() => {
    service.registerUser(user).subscribe(user => {
      expect(user.userName).toEqual('teamcheck.31');
    })
  });
});
