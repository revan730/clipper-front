import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, AuthGuard } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserDashComponent } from './userdash/userdash.component';

import { ClipperService } from './services/clipper.service';
import { StorageService } from './services/storage.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClipperService, StorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
