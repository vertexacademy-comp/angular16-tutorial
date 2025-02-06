import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';

const routes: Routes = [
  {path:'', component: ViewAllUsersComponent},
  {path:'all-users', component: ViewAllUsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
