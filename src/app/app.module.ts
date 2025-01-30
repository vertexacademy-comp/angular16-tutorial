import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModuleModule } from './custom-module/custom-module.module';
import {HttpClientModule} from '@angular/common/http';
import { FilterByLengthPipe } from './filter-by-length.pipe';
import { GetAgePipe } from './get-age.pipe';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
