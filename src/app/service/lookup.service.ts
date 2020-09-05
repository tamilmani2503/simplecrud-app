import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../model/country.model';
import { State } from '../model/state.model';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private _http:HttpClient) { }

  public fetchAllCountries() :Observable<Country[]> {
    return this._http.get<Country[]>('http://localhost:3000/countries');
  }

  public fetchStateByCountryCode (countryCode:string):Observable<State[]> {
    return this._http.get<State[]>('http://localhost:3000/states'
    ,{params:new HttpParams().set('countryCode',countryCode)});
  }

  public fetchCityByStateId (stateCode:string):Observable<City[]> {
    return this._http.get<City[]>('http://localhost:3000/cities'
    ,{params:new HttpParams().set('stateCode',stateCode)});
  }

}
