import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TemplateFormsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    
  ]
})
export class CustomFormModule { }
