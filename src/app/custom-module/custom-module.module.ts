import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomModuleRoutingModule } from './custom-module-routing.module';
import { MyComponent } from '../my-component/my-component.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';
import { PostsDataComponent } from '../posts-data/posts-data.component';
import {HttpClientModule} from '@angular/common/http';
import { HighlightDirective } from '../highlight.directive';




@NgModule({
  declarations: [
  MyComponent,
  ContactComponent,
  PostsDataComponent,
  HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CustomModuleRoutingModule,
    HttpClientModule
  ],
  providers:[],
  exports:[MyComponent,ContactComponent,PostsDataComponent,HighlightDirective]
})
export class CustomModuleModule { }
