import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
    {path:'', redirectTo:'viewproducts', pathMatch:'full'},
    {path:'viewproducts', component: ViewProductsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
