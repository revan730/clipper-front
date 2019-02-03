import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, AuthGuard, AdminGuard } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserDashComponent } from './userdash/userdash.component';

import { NgxPaginationModule } from 'ngx-pagination';

import { ClipperService } from './services/clipper.service';
import { StorageService } from './services/storage.service';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { ReposListComponent } from './repos-list/repos-list.component';
import { BuildsListComponent } from './builds-list/builds-list.component';
import { BranchConfigsListComponent } from './branch-configs-list/branch-configs-list.component';
import { RepoComponent } from './repo/repo.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateRepoComponent } from './create-repo/create-repo.component';
import { BuildComponent } from './build/build.component';
import { CreateBranchComponent } from './create-branch/create-branch.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashComponent,
    AdminDashComponent,
    ReposListComponent,
    BuildsListComponent,
    BranchConfigsListComponent,
    RepoComponent,
    SettingsComponent,
    CreateRepoComponent,
    BuildComponent,
    CreateBranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [ClipperService, StorageService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
