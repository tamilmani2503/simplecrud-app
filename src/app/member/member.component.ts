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
  deleteSuccess:boolean = false;
  constructor(private route:ActivatedRoute, private memberService: MemberService) { }

  ngOnInit(): void {
    this.deleteSuccess=false;
    console.log(localStorage.getItem('memberList'));
    let memberTemp = localStorage.getItem('memberList');
    if (memberTemp === null||!localStorage.getItem('memberList') &&  JSON.parse(localStorage.getItem('memberList')).length > 0) {
        this.route.params.subscribe (
          (params:Params) => {
            
            this.memberService.fetchByUserId(params['id']).subscribe(
                data => {
                  this.userId =params['id'];
                  this.members=data;
                  localStorage.setItem('memberList', JSON.stringify(this.members));
                }
            );
          }
        );
    } else {
      this.userId = localStorage.getItem('userId');
      this.members = JSON.parse(localStorage.getItem('memberList'));
    }
  }

  onDeleteMember(memberId: number) {
    console.log(this.members.find(x => x.memberId === memberId));
    this.members = this.members.filter (x => x.memberId != memberId);
    localStorage.setItem('memberList', JSON.stringify(this.members));
    this.deleteSuccess = true;
  }

}
