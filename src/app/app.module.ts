import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { CustomModuleModule } from './custom-module/custom-module.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CustomModuleModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
