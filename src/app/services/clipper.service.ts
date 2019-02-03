import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

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
  public setSecret(secret: string) {
    const token = this.st.data['token'];
    if (token) {
      const request: Clipper.PostSecretRequest = {
        secret: secret
      };
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const options = {
        headers
      };
      return this.http.post(
        Clipper.PostSecretRequest.link,
        request,
        options
      ).pipe(
        map(res => res as Clipper.PostSecretResponse),
        map(res => (console.log(res), res))
      );
    }
  }
  public setAccessToken(aToken: string) {
    const apiToken = this.st.data['token'];
    if (apiToken) {
      const request: Clipper.PostAccessTokenRequest = {
        token: aToken
      };
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${apiToken}`
      });
      const options = {
        headers
      };
      return this.http.post(
        Clipper.PostAccessTokenRequest.link,
        request,
        options
      ).pipe(
        map(res => res as Clipper.PostAccessTokenResponse),
        map(res => (console.log(res), res))
      );
    }
  }
  public addRepo(fullName: string) {
    const apiToken = this.st.data['token'];
    if (apiToken) {
      const request: Clipper.AddRepoRequest = {
        fullName: fullName
      };
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${apiToken}`
      });
      const options = {
        headers
      };
      return this.http.post(
        Clipper.AddRepoRequest.link,
        request,
        options
      ).pipe(
        map(res => res as Clipper.AddRepoResponse),
        map(res => (console.log(res), res))
      );
    }
  }
  // TODO: token via interception
  public getRepos(page: number, limit: number) {
    const token = this.st.data['token'];
    if (token) {
      const params = new HttpParams()
      .set('page', String(page))
      .set('limit', String(limit));
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const options = {
        params,
        headers
      };
      console.log('SENDING GET REPOS', params);
      return this.http.get(
        Clipper.GetReposRequest.link,
        options
      ).pipe(
        map(res => res as Clipper.GetReposResponse),
        map(res => (console.log(res), res))
      )
    }
  }
  public getRepo(repoID: number) {
    const token = this.st.data['token'];
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const options = {
        headers
      };
      console.log('SENDING GET REPO', repoID);
      return this.http.get(
        Clipper.GetRepoRequest.link(repoID),
        options
      ).pipe(
        map(res => res as Clipper.Repo),
        map(res => (console.log(res), res))
      )
    }
  }
  public getBuild(buildID: number) {
    const token = this.st.data['token'];
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const options = {
        headers
      };
      console.log('SENDING GET BUILD', buildID);
      return this.http.get(
        Clipper.GetBuildRequest.link(buildID),
        options
      ).pipe(
        map(res => res as Clipper.Build),
        map(res => (console.log(res), res))
      )
    }
  }
  public getBuilds(repoID: number, branch: string, page: number, limit: number) {
    const token = this.st.data['token'];
    if (token) {
      const params = new HttpParams()
      .set('branch', branch)
      .set('page', String(page))
      .set('limit', String(limit));
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const options = {
        params,
        headers
      };
      console.log('SENDING GET BUILDS', params);
      return this.http.get(
        Clipper.GetBuildsRequest.link(repoID),
        options
      ).pipe(
        map(res => res as Clipper.GetBuildsResponse),
        map(res => (console.log(res), res))
      )
    }
  }
  public addBranchConfig(branch: string, repoID: number) {
    const apiToken = this.st.data['token'];
    if (apiToken) {
      const request: Clipper.AddBranchConfigRequest = {
        branch: branch
      };
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${apiToken}`
      });
      const options = {
        headers
      };
      return this.http.post(
        Clipper.AddBranchConfigRequest.link(repoID),
        request,
        options
      ).pipe(
        map(res => res as Clipper.AddBranchConfigResponse),
        map(res => (console.log(res), res))
      );
    }
  }
  public getBranchConfigs(repoID: number, page: number, limit: number) {
    const token = this.st.data['token'];
    if (token) {
      const params = new HttpParams()
      .set('page', String(page))
      .set('limit', String(limit));
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const options = {
        params,
        headers
      };
      console.log('SENDING GET BRANCH CONFIGS', params);
      return this.http.get(
        Clipper.GetBranchConfigsRequest.link(repoID),
        options
      ).pipe(
        map(res => res as Clipper.GetBranchConfigsResponse),
        map(res => (console.log(res), res))
      )
    }
  }
}
