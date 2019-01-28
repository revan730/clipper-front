import { Injectable } from '@angular/core';
import { Clipper } from './types';

import * as jwt from 'jsonwebtoken';

@Injectable()
export class StorageService {
  public data: any;
  private tokenPayload: Clipper.TokenPayload
  constructor(
) {
    this.data = {};
    this.tokenPayload = {};
  }
  setToken(token: string) {
    console.log('set token: ', token);
    this.data['token'] = token;
    localStorage.setItem('token', token);
    this.tokenPayload = this.parseToken();
  }
  parseToken(): Clipper.TokenPayload {
    if (this.data['token']) {
      const decodedPayload: any = jwt.decode(this.data['token']);
      const jsonPayload: Clipper.TokenPayload = decodedPayload;
      return jsonPayload;
    }
    return null;
  }
  isTokenExpired(): boolean {
    if (this.tokenPayload) {
      const tokenDate: Date = new Date(this.tokenPayload.exp * 1000);
      const todayDate: Date = new Date();
      return tokenDate < todayDate;
    }

    return true;
  }
  isUserAdmin(): boolean {
    if (!this.tokenPayload) {
      return false
    }
    return this.tokenPayload.admin;
  }
}
