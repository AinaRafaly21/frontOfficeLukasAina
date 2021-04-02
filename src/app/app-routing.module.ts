import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableauComponent } from './tableau/tableau.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path:'tableau',component:TableauComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
