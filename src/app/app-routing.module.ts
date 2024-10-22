import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomModuleModule } from './custom-module/custom-module.module';

const routes: Routes = [
  {path:'/', component:CustomModuleModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
