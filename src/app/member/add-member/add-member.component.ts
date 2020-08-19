import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LookupService } from '../../service/lookup.service';
import { Country } from '../../model/country.model';
import { State } from '../../model/state.model';
import { City } from '../../model/city.model';
import { Member } from '../member.model';
import { ActivatedRoute, Params } from '@angular/router';
import { MemberService } from '../../service/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  @ViewChild('f') addMemberForm : NgForm;
  member=new Member();
  countries:Country[];
  states:State[];
  cities:City[];
  genders : string[] = [
    'Male', 'Female', 'Other'
  ];
  userId:string = "";
  memberAddedMessage:string="";
  constructor(private lookUpService:LookupService, private route:ActivatedRoute,
    private memberService:MemberService) { }

  ngOnInit(): void {
    this.lookUpService.fetchAllCountries().subscribe(
      data=>
      {
        this.countries=data;
      }
    );

    this.route.params.subscribe (
      (params:Params) => {
          this.userId =params['id'];
      }
    );
  }

  onChangeCountry(countryCode: string) {
      this.lookUpService.fetchStateByCountryCode(countryCode).subscribe(
        data => {
          this.states=data;
        }
      );
  }
  
  onChangeState(stateCode : string) {
    this.lookUpService.fetchCityByStateId(stateCode).subscribe(
      data => {
        this.cities=data;
      }
    );

  }

  onSubmit() {
    this.member.memberId = Math.floor(100000000 + Math.random() * 900000000);
    this.member.userId = this.userId;
    console.log(this.member);
    this.memberService.addMember(this.member).subscribe(
      data => {
        if (data['memberId']) {
            this.memberAddedMessage= "Member was added successfully MemberId :" +data['memberId'];
        }
      }
    );

  }
}
