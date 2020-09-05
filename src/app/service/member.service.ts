import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { Member} from '../member/member.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private _http:HttpClient) { }

  public fetchByUserId(userId:string) : Observable<Member[]>{
   let params = new HttpParams().set("userId",userId);
    return this._http.get<Member[]>('http://localhost:3000/members',{params:params});
  }

  public addMember(member: Member):Observable<Member> {
    return this._http.post<Member>('http://localhost:3000/members', member);
  }

  public fetchMemberById (memberId: string) :Observable<Member[]> {
    return this._http.get<Member[]>('http://localhost:3000/members', {params:new HttpParams().set('memberId',memberId)});
  }

  public updateMember (member:Member) :Observable<any> {
    return this._http.patch<any>('http://localhost:3000/members/'+member.id,member);
  }

  public deleteMember (memberId:string) :Observable<any> {
    return this._http.delete<any>('http://localhost:3000/members/'+memberId);
  }
}
