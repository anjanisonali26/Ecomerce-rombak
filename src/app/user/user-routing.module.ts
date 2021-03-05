import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { userAuthorization } from '../shared/service/interception/userAuthorization';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

const routes: Routes = [
  { path: 'signup', component: RegisterComponent },
  {path: 'signin', component: LoginComponent},
  { path : 'profile/detail' ,canActivate:[userAuthorization]  ,component : ProfileDetailComponent},
  { path : 'profile' ,canActivate:[userAuthorization]  ,component : ProfileComponent,},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
