import { Component, OnInit } from '@angular/core';
import { Member } from './member.model';
import { ActivatedRoute, Params } from '@angular/router';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members : Member[];
  userId:string;

  constructor(private route:ActivatedRoute, private memberService: MemberService) { }

  ngOnInit(): void {
    this.route.params.subscribe (
      (params:Params) => {
        
        this.memberService.fetchByUserId(params['id']).subscribe(
            data => {
              this.userId =params['id'];
              this.members=data;
            }
        );
      }
    );
  }

}
