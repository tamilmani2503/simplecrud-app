import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemberComponent } from './edit-member.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute} from '@angular/router';
import { RouterTestingModule} from '@angular/router/testing';
import { Subject } from 'rxjs';
import {FormsModule} from '@angular/forms'

class ActivatedRouteStub {
  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('EditMemberComponent', () => {
  let component: EditMemberComponent;
  let fixture: ComponentFixture<EditMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [ EditMemberComponent ],
      providers: [
        
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
