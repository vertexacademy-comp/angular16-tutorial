import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponent } from '../my-component/my-component.component';
import { ContactComponent } from '../contact/contact.component';
import { PostsDataComponent } from '../posts-data/posts-data.component';

const routes: Routes = [
  { path: '', component: MyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'posts', component: PostsDataComponent },
  { path: 'posts/:id', component: PostsDataComponent }
  //{ path: 'posts', component: PostsDataComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomModuleRoutingModule { }
