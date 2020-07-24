import { TodoListComponent } from './component/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserLoginComponent } from './components/user-login/user-login.component';
import {MainPageComponent } from './components/main-page/main-page.component';
import {UserRegisterComponent} from './components/user-register/user-register.component';
import { UserListComponent } from './components/user-list/user-lsit.component';
import { TempConverterComponent } from './component/temp-converter/temp-converter.component';

//VALID URL's
const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: UserLoginComponent},
  {path:'user/register', component: UserRegisterComponent},
  {path: 'user/list', component:UserListComponent},
  {path:'converter', component:TempConverterComponent},
  {path:'todoList',component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

