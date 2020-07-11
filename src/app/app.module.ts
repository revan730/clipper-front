import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, AuthGuard } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClipperService } from './services/clipper.service';
import { StorageService } from './services/storage.service';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { ImagesListComponent } from './images-list/images-list.component';
import { CreateImageComponent } from './create-image/create-image.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashComponent,
    ImagesListComponent,
    CreateImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [ClipperService, StorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
