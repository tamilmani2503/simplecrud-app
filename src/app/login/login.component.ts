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
  userId:string="";
  successUrl:string="dashboard/";
  
  constructor(private loginRegService:LoginregService, private _router:Router) { }

  ngOnInit(): void {
  }

  // onSubmit(form : NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.loginRegService.doLogin(this.loginForm.value['userName'])
      .subscribe( 
            data => {
                for (let key of data) {
                 if (data.hasOwnProperty(key))   
                    console.log(data);     
                   if (this.loginForm.value['password'] === key['password']) {
                           this.userId= key['userId'];
                            this.successUrl=this.successUrl+this.userId;
                          this._router.navigate([this.successUrl]);
                       } else {
                          console.log("exception occurred");
                         this.badCredentials="Either UserName/Password is incorrect";
                  }
                }
              }
        );
     
  }

}
