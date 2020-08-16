import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('f') registerForm : NgForm;
  userNameAvailability:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  checkUsernameAvailability(event : Event) {
      let userName = (<HTMLInputElement>event.target).value;
      if (userName === 'hello') {
        this.userNameAvailability = false;
      }
  }

  onSubmit() {
    console.log(this.registerForm);
  }

}
