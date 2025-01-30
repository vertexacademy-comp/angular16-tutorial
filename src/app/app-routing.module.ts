import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  //lazy loading
  {path:'home', loadChildren: () => import('./custom-module/custom-module.module')
    .then(m => m.CustomModuleModule) },

    {path:'forms', loadChildren: () => import('./forms/forms.module')
      .then(m => m.CustomFormModule) },
      
    // { path: '', redirectTo: 'home2', pathMatch: 'full' }, //default route
    // { path: 'home2', component: AppComponent },

  //   {
  //     path: 'product/:id', component: ProductComponent,
  //     children: [
  //       {path: '', redirectTo:'updates', pathMatch:'full'},
  //       { path: 'offers', component: ProductOfferComponent },
  //       { path: 'updates', component: ProductUpdatesComponent }
  //     ]
  //   },
  //   { path: 'about', component: AboutComponent, 
  //     children: [
  //       {path: 'rating', outlet:'rate', component:RatingComponent},
  //       {path: 'feedback', outlet:'feed', component:FeedbackComponent}
  //     ]
  //   },
  //   { path: 'contact', component: ContactComponent },
  //   { path: '**', component: HomeComponent }
  // ];
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
