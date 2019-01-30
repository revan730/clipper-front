import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from './services/storage.service';
import { ClipperService } from './services/clipper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clipper';
  constructor(
    public ss: StorageService,
    private router: Router,
    public cs: ClipperService
  ) {
    
  }
  logout() {
    this.ss.data['token'] = null;
    localStorage.removeItem('token');
    location.reload();
  }
  goToSettings() {
    this.router.navigateByUrl('/settings');
  }
  goToDashboard() {
    if (this.ss.isUserAdmin()) {
      this.router.navigateByUrl('/adminDash');
    } else {
      this.router.navigateByUrl('/userDash');
    }
  }
}
