import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('f') registerForm : NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Submitted");
  }

}
