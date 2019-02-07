import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClipperService } from '../services/clipper.service';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  error: string = null;
  registerSuccess = false;

  constructor(
    public clipper: ClipperService,
    private router: Router,
    private storage: StorageService,
  ) { }

  ngOnInit() {
  }

  onRegister() {
    console.log(this.clipper);
    this.clipper.register(this.username, this.password)
    .subscribe(res => {
      this.error = res.err;
      this.registerSuccess = !res.err;
    });
  }
  onLogin() {
    this.clipper.login(this.username, this.password)
    .subscribe(res => {
      this.error = res.err;
      if (!res.err) {
        this.storage.setToken(res.token);
        this.router.navigateByUrl('/adminDash');
      }
    });
  }

}
