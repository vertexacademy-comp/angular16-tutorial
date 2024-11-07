import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponent } from './my-component/my-component.component';

const routes: Routes = [
  {path:'home', loadChildren: () => import('./custom-module/custom-module.module')
    .then(m => m.CustomModuleModule) },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
