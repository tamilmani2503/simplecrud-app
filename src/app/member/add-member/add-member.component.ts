import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  @ViewChild('f') addMemberForm : NgForm;

  genders : string[] = [
    'Male', 'Female', 'Other'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("submitted");
  }
}
