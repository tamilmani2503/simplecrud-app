import {HttpModule,
XHRBackend,
RequestMethod,
ResponseOptions,
Response} from '@angular/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { MockBackend, MockConnection} from '@angular/http/testing';
import { LookupService } from './lookup.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LookupService', () => {
  
  let service: LookupService;
  const countries = [
    {
      "countryCode": "USA",
      "countryDescription": "United States of America"
    },
    {
      "countryCode": "IND",
      "countryDescription": "India"
    },
    {
      "countryCode": "CHN",
      "countryDescription": "China"
    }
  ];
  const states = [
    {
      "countryCode": "USA",
      "stateCode": "AL",
      "stateDescription": "Alabama"
    },
    {
      "countryCode": "USA",
      "stateCode": "CT",
      "stateDescription": "Connecticut"
    },
    {
      "countryCode": "USA",
      "stateCode": "IA",
      "stateDescription": "Lowa"
    },
    {
      "countryCode": "IND",
      "stateCode": "TN",
      "stateDescription": "TAMILNADU"
    },
    {
      "countryCode": "IND",
      "stateCode": "KER",
      "stateDescription": "Kerala"
    },
    {
      "countryCode": "IND",
      "stateCode": "MAH",
      "stateDescription": "Maharashtra"
    }
  ];
  const cities =[
    {
      "stateCode": "AL",
      "city": "Birmingham"
    },
    {
      "stateCode": "AL",
      "city": "Montgomery"
    },
    {
      "stateCode": "CT",
      "city": "Hartford"
    },
    {
      "stateCode": "CT",
      "city": "Bridgeport"
    },
    {
      "stateCode": "IA",
      "city": "Des Moines"
    },
    {
      "stateCode": "TN",
      "city": "Chennai"
    },
    {
      "stateCode": "TN",
      "city": "Coimbatore"
    }
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers : [
      LookupService,
      {provide: XHRBackend, useClass:MockBackend}
    ]
    });
    
    service = TestBed.get(LookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should return countries list', () => {
    service.fetchAllCountries().subscribe (countries=> {
      expect(countries.length).toEqual(3);
      expect(countries[0].countryCode).toEqual('USA');
      expect(countries[1].countryCode).toEqual('IND');
    });
  });

  it ('should fetch states for country', ()=>{
    service.fetchStateByCountryCode('USA').subscribe (states => {
      expect(states.length).toEqual(3);
      expect(states[0].stateCode).toEqual('AL');
    })
  });

  
  it ('should fetch cities for State', ()=>{
    service.fetchCityByStateId('AL').subscribe (cities => {
      expect(cities.length).toEqual(2);
      expect(cities[0].city).toEqual('Birmingham');
    })
  });
});
