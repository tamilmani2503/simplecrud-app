import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { LoginregService } from '../service/loginreg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild ('f') loginForm : NgForm;
  badCredentials : string ="";
  
  constructor(private loginRegService:LoginregService, private _router:Router) { }

  ngOnInit(): void {
  }

  // onSubmit(form : NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.loginRegService.doLogin(this.loginForm.value['userName'], this.loginForm.value['password'])
      .subscribe( 
            data => {
                for (let key of data) {
                  if (data.hasOwnProperty(key))   
                    console.log(key['username']);     
                    if (this.loginForm.value['userName'].toUpperCase() === key['username'].toUpperCase()
                    && this.loginForm.value['password'] === key['password']) {
                      this._router.navigate(['dashboard']);
                    } else {
                      console.log("exception occurred");
                      this.badCredentials="Either UserName/Password is incorrect";
                    }
                  }
                }
        );
     
  }

}
