import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './views/user/user.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"registro", component:RegisterComponent},
  {path:"iniciar sesion", component:LoginComponent},
  {path:"usuarios", component:UserComponent},
  {path:"**", pathMatch:"full",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
