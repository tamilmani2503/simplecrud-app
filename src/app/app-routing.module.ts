import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { MemberComponent } from './member/member.component';
import { AddMemberComponent } from './member/add-member/add-member.component';
import { RemoveMemberComponent} from './member/remove-member/remove-member.component';
import { EditMemberComponent} from './member/edit-member/edit-member.component';

const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'register', component: RegistrationComponent},
    {path:'dashboard', component: MemberComponent},
    {path:'member', component: AddMemberComponent},
    {path:'member/delete', component: RemoveMemberComponent},
    {path:'member/:id', component: AddMemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
