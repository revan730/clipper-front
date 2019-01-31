import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserDashComponent } from './userdash/userdash.component';

import { StorageService } from './services/storage.service';


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { RepoComponent } from './repo/repo.component';
import { SettingsComponent } from './settings/settings.component';
import { BuildComponent } from './build/build.component';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private storage: StorageService,
    private router: Router,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.storage.data['token']) {
      const lsToken: string = localStorage.getItem('token');
      if (lsToken) {
        this.storage.setToken(lsToken);
      }
    }
    if (!this.storage.data['token'] || this.storage.isTokenExpired()) {
      console.log(this.storage.isTokenExpired());
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private storage: StorageService,
    private router: Router,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.storage.isUserAdmin()) {
      this.router.navigateByUrl('/userDash');
      return false;
    }
    return true;
  }
}

const routes: Routes = [
  {path: '', redirectTo: '/userDash', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'userDash', component: UserDashComponent, canActivate: [AuthGuard]},
  {path: 'adminDash', component: AdminDashComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'repos/:id', component: RepoComponent, canActivate: [AuthGuard]},
  {path: 'builds/:id', component: BuildComponent, canActivate: [AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
