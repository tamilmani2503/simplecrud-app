import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginregService {

  constructor(private _http:HttpClient) { }

  public doLogin(user:string):Observable<any> {
    let params1 = new HttpParams().set("userName", user);
    return this._http.get('http://localhost:3000/register',{params:params1});
  }

  public registerUser(user:User):Observable<any> {
    console.log(user);
    return this._http.post<User>('http://localhost:3000/register',user); 
  }
}
