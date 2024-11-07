import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomModuleRoutingModule } from './custom-module-routing.module';
import { MyComponent } from '../my-component/my-component.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';



@NgModule({
  declarations: [
  MyComponent,
  ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CustomModuleRoutingModule
  ],
  exports:[MyComponent,ContactComponent]
})
export class CustomModuleModule { }
