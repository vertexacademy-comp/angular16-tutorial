import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomModuleRoutingModule } from './custom-module-routing.module';
import { MyComponent } from '../my-component/my-component.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  MyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CustomModuleRoutingModule
  ],
  exports:[MyComponent]
})
export class CustomModuleModule { }
