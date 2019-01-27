import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { StorageService } from './storage.service';


import { Clipper } from './types';

@Injectable()
export class ClipperService {

  constructor(
    private st: StorageService,
    private http: HttpClient,
  ) {

    (window as any).cs = this;

  }

  public login(username: string, password: string) {
    const request: Clipper.LoginRequest = {
      login: username,
      password: password
    };
    console.log('SENDING LOGIN', request);
    return this.http.post(
      Clipper.LoginRequest.link,
      request
    ).pipe(
      map(res => res as Clipper.LoginResponse),
      map(res => (console.log(res), res))
    );
  }
  public register(username: string, password: string) {
    const request: Clipper.RegisterRequest = {
      login: username,
      password: password
    };
    console.log('SENDING REGISTER', request);
    return this.http.post(
      Clipper.RegisterRequest.link,
      request
    ).pipe(
      map(res => res as Clipper.RegisterResponse),
      map(res => (console.log(res), res))
    );
  }

}
