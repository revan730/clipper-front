import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public getImages() {
    return this.http.get(Clipper.ImagesRequest.link)
    .pipe(
      map(res => res as Array<string>),
      map(res => (console.log(res), res))
    )
  }

  public uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image, image.name);
    const token = this.st.data['token'];
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = {
      headers
    };
    return this.http.post(Clipper.UploadImageRequest.link, formData, options)
    .pipe(
      map(res => res as Clipper.ImagesResponse),
      map(res => (console.log(res), res))
    )
  }

  public removeImage(image: string) {
    const token = this.st.data['token'];
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = {
      headers
    };
    return this.http.delete(Clipper.RemoveImageRequest.link(image), options)
    .pipe(
      map(res => res as Clipper.RemoveImageResponse),
      map(res => (console.log(res), res))
    )
  }
}
