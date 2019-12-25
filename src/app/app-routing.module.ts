import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { StorageService } from './services/storage.service';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';

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

const routes: Routes = [
  {path: '', redirectTo: '/adminDash', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'adminDash', component: AdminDashComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
