import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userId:string="";
  constructor(private _routed:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId')) {
      this.userId =localStorage.getItem('userId');
    }
  }

  onLogout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('memberList');
    this._routed.navigate(['']);
  }

}
