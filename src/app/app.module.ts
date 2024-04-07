import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RapidComponent } from './rapid/rapid.component';
import{HttpClientModule} from '@angular/common/http';
import { TranlateComponent } from './service/tranlate/tranlate.component';
import { GoogletanlateComponent } from './googletanlate/googletanlate.component';
@NgModule({
  declarations: [
    AppComponent,
    RapidComponent,
    TranlateComponent,
    GoogletanlateComponent
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
