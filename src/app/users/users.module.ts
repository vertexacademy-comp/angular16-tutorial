import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUsersComponent } from './add-users/add-users.component';
import { SearchUsersComponent } from './search-users/search-users.component';


@NgModule({
  declarations: [
    ViewAllUsersComponent,
    AddUsersComponent,
    SearchUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
