import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, AuthGuard, AdminGuard } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserDashComponent } from './userdash/userdash.component';

import { ClipperService } from './services/clipper.service';
import { StorageService } from './services/storage.service';
import { AdminDashComponent } from './admin-dash/admin-dash.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashComponent,
    AdminDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClipperService, StorageService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
