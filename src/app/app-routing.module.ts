import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {UserListComponent} from './user/userList/userList.component';
import {UserDetailComponent} from './user/detail/userDetail.component';
import {RegisterComponent} from './user/register/register.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list', component: UserListComponent},
  {path: 'user/:userName', component: UserDetailComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
