import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginSubmit : DebugElement;
  let userNameEl : DebugElement;
  let passwordEl : DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     imports:[HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loginSubmit = fixture.debugElement.query(By.css('button'));
    userNameEl = fixture.debugElement.query (By.css('input[id=userName]'));
    passwordEl = fixture.debugElement.query(By.css('input[id=password]'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should check button is diabled',()=> {
    fixture.detectChanges();
    expect(loginSubmit.nativeElement.diabled).toBeTruthy;
  });

  it ('should enable button for provided input values', () => {
    userNameEl.nativeElement.values = 'test';
    passwordEl.nativeElement.values ='pass';
    expect(loginSubmit.nativeElement.diabled).toBeFalsy;
  });

  // it ('should check the value submitted', () => {
  //   userNameEl.nativeElement.values = 'test';
  //   passwordEl.nativeElement.values ='pass';
  //   fixture.detectChanges();
  //   // loginSubmit.triggerEventHandler('click',{});
  //   // fixture.detectChanges();
  //   // expect(component.loginForm.value['userName']).toBe('test');
  //   expect(userNameEl).toContain('test');
  // });
});
