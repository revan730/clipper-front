import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  public data: any;

  constructor() {
    this.data = {};
  }
  setToken(token: string) {
    this.data['token'] = token;
    localStorage.setItem('token', token);
  }
}
