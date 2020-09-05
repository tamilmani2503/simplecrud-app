import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';


import { AddMemberComponent } from './add-member.component';
import { LookupService } from '../../service/lookup.service';
import { Country } from '../../model/country.model';
import { State } from '../../model/state.model';

describe('AddMemberComponent', () => {
  let component: AddMemberComponent;
  let fixture: ComponentFixture<AddMemberComponent>;
  let lookUpService : LookupService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule,FormsModule],
      declarations: [ AddMemberComponent ],
      providers:[LookupService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemberComponent);
    lookUpService = TestBed.get(LookupService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should return value',() => {
  //   let states: State[];
  //   lookUpService.fetchStateByCountryCode('IND').subscribe (data=>{
  //       states = data; 
  //   });
  //   console.log('states' +states);
  //       expect(states).toBeGreaterThan(1);
  // });
  it ('should call fetchCityByStateId method',() =>{
    spyOn(lookUpService, 'fetchCityByStateId');
    expect(lookUpService.fetchCityByStateId).toHaveBeenCalled;
  });

  it ('should call fetchStateByCountryCode method',() =>{
    spyOn(lookUpService, 'fetchStateByCountryCode');
    expect(lookUpService.fetchStateByCountryCode).toHaveBeenCalled;
  });

  it ('should call fetchAllCountries method',() =>{
    spyOn(lookUpService, 'fetchAllCountries');
    expect(lookUpService.fetchAllCountries).toHaveBeenCalled;
  });
});
