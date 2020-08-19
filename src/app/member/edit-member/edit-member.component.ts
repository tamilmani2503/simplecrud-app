import { Component, OnInit, ViewChild } from '@angular/core';
import { Member } from '../member.model';
import { Params, ActivatedRoute } from '@angular/router';
import { MemberService } from '../../service/member.service';
import { LookupService } from '../../service/lookup.service';
import { Country } from '../../model/country.model';
import { State } from '../../model/state.model';
import { City } from '../../model/city.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  member: Member;
  memberUpdatedMessage:string="";
  countries:Country[];
  states:State[];
  cities:City[];
  genders : string[] = [
    'Male', 'Female', 'Other'
  ];
  @ViewChild('f') updateMemberForm : NgForm;
  constructor(private lookUpService:LookupService, private route:ActivatedRoute,
    private memberService:MemberService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe (
      (params:Params) => { 
        this.memberService.fetchMemberById(params['id']).subscribe(
            data => {
              this.member=data;
            }
        );
      }
    );
    this.lookUpService.fetchAllCountries().subscribe(
      data=>
      {
        this.countries=data;
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
  this.memberService.updateMember(this.member).subscribe(
    data => {
      this.memberUpdatedMessage="Member data Updated";
    }
  );
}

}
