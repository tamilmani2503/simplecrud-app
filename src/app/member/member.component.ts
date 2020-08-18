import { Component, OnInit } from '@angular/core';
import { Member } from './member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members : Member[] = [
    new Member('Tamilmani','Narayanan','tamilmani.31@gmail.com','123'),
    new Member('Anuratha','Tamilmani','anu.sakthivel45@gmail.com','345'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
