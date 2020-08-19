import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { LoginregService } from '../../service/loginreg.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('f') registerForm : NgForm;
  userNameAvailability:boolean=true;
  currentDate:string = "";
  user = new User
  registrationSuccess:string="";

  constructor(private _loginRegService:LoginregService) { }

  ngOnInit(): void {
    let today = new Date();
    let dd = String(today. getDate()). padStart(2, '0');
    let mm = String(today. getMonth() + 1). padStart(2, '0');
    let yyyy = today. getFullYear();
    this.currentDate = dd + '/' + mm + '/' + yyyy;
  }

  checkUsernameAvailability(event : Event) {
      let userName = (<HTMLInputElement>event.target).value;
      this._loginRegService.doLogin(userName).subscribe(
        data =>{
          this.userNameAvailability = true;
            for(let key of data) {
                this.userNameAvailability = false;
            }
           
        }
      );
    
  }

  onSubmit() {
    this.user.registrationDate = this.currentDate;
    this.user.userId = Math.floor(100000000 + Math.random() * 900000000);
    this._loginRegService.registerUser(this.user).subscribe(
       status => {
          console.log(status);
          this.registrationSuccess="Registered Successfully, please Login with your credentials";
        },
        error => {

        })
  }

}
