import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

const routes: Routes = [
  {path:'', redirectTo:'templateforms', pathMatch:'full'},
  {path:'templateforms', component: TemplateFormsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
