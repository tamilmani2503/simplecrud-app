import { TestBed } from '@angular/core/testing';

import { MemberService } from './member.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Member } from '../member/member.model';

describe('MemberService', () => {
  let service: MemberService;
  const members = [
    {
      "firstName": "Hello",
      "lastName": "Hello",
      "relationship": "dependents",
      "dob": "2020-08-21",
      "gender": "Female",
      "address": "Address2",
      "country": "IND",
      "phoneNumber": "2343243243",
      "zipcode": "343534534",
      "emailId": "test@rest.com",
      "state": "TN",
      "city": "Coimbatore",
      "coverage": "group",
      "ssn": "32325235",
      "effectiveDate": "2020-08-28",
      "benefit": "dental",
      "terminationDate": "2020-08-28",
      "memberId": 385017101,
      "userId": "196051213",
      "id": 1
    },
    {
      "firstName": "Iwa",
      "lastName": "World",
      "relationship": "dependents",
      "dob": "2020-08-22",
      "gender": "Other",
      "address": "Address2",
      "country": "IND",
      "phoneNumber": "2343243243",
      "zipcode": "343534534",
      "emailId": "test@rest.com",
      "state": "TN",
      "city": "Coimbatore",
      "coverage": "group",
      "ssn": "243534634",
      "benefit": "dental",
      "effectiveDate": "2020-08-19",
      "terminationDate": "2020-08-21",
      "memberId": 896923895,
      "userId": "196051213",
      "id": 2
    }];

    const member: Member ={
      "firstName": "Iwa",
      "lastName": "World",
      "relationship": "dependents",
      "dob": "2020-08-22",
      "gender": "Other",
      "address": "Address2",
      "country": "IND",
      "phoneNumber": "2343243243",
      "zipcode": "343534534",
      "emailId": "test@rest.com",
      "state": "TN",
      "city": "Coimbatore",
      "coverage": "group",
      "ssn": "243534634",
      "benefit": "dental",
      "effectiveDate": "2020-08-19",
      "terminationDate": "2020-08-21",
      "memberId": 896923895,
      "userId": "196051213",
      "id": "2"
    };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[MemberService]
    });
    service = TestBed.inject(MemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should fetch user by Id', () =>{
    service.fetchByUserId('1').subscribe(mbr => {
      expect(member.userId).toEqual('196051213');
    });
  });

  it ('should add member', ()=> {
    service.addMember(member).subscribe(
      mbr => {
        expect (member.userId).toEqual('196051213');
      }
    );
  });

  it ('should fetch all the members', ()=>{
    service.fetchMemberById('196051213').subscribe(
      memberArr => {
        expect(memberArr.length).toEqual(3);
      }
    );
  });

  it ('should update the member', ()=>{
    service.updateMember(member).subscribe(
      member => {
        expect(member.userId).toEqual('1111')
      }
    );
  });
});
