import { Component, OnInit } from '@angular/core';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  webhookSecret: string;
  accessToken: string;
  webhookSecretSuccess = false;
  accessTokenSuccess = false;
  webhookSecretError: string = null;
  accessTokenError: string = null;
  user: string;
  userAdmin = false;

  constructor(
    public clipper: ClipperService,
    public ss: StorageService,
  ) { }

  ngOnInit() {
    this.user = this.ss.getUserName();
    this.userAdmin = this.ss.isUserAdmin();
  }

  onWebhookSave() {
    this.clipper.setSecret(this.webhookSecret)
    .subscribe(res => {
      this.webhookSecretError = res.err;
      this.webhookSecretSuccess = !res.err;
    });
  }

  onAccessTokenSave() {
    this.clipper.setAccessToken(this.accessToken)
    .subscribe(res => {
      this.accessTokenError = res.err;
      this.accessTokenSuccess = !res.err;
    });
  }

}
