import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomModuleRoutingModule } from './custom-module-routing.module';
import { MyComponent } from '../my-component/my-component.component';



@NgModule({
  declarations: [
  MyComponent
  ],
  imports: [
    CommonModule,
    CustomModuleRoutingModule
  ],
  exports:[MyComponent]
})
export class CustomModuleModule { }
