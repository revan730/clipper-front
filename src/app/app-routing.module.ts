import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserDashComponent } from './userdash/userdash.component';

import { StorageService } from './services/storage.service';


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

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
      this.storage.data['token'] = localStorage.getItem('token');
    }
    if (!this.storage.data['token']) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}

const routes: Routes = [
  {path: '', redirectTo: '/userDash', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'userDash', component: UserDashComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
