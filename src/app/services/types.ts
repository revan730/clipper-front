
export namespace Clipper {
    export const globalLink = 'https://gorinich2-api-tmnxekcb3a-uc.a.run.app/api/v1/';
    //export const globalLink = 'http://127.0.0.1:8080/api/v1/';
    //export const imagesLink = 'https://revan730.tk/gallery.json';
    export const imagesLink = 'https://storage.googleapis.com/revan730.tk/gallery.json';

    function genLink(a: string) {
        return globalLink + a;
      }
      export namespace ImagesRequest {
        export const link = imagesLink;
      }
      export interface ImagesResponse {
        images: string[];
      }
      export namespace UploadImageRequest {
        export const link = genLink('image');
      }
      export interface UploadImageResponse {
        err?: string;
      }
      export namespace RemoveImageRequest {
        export const link = (image) => genLink('image?name=' + image);
      }
      export interface RemoveImageResponse {
        err?: string;
      }
      export interface LoginRequest {
        login: string;
        password: string;
      }
      export namespace LoginRequest {
        export const link = genLink('login');
      }
      export interface LoginResponse {
        token?: string;
        err?: string;
      }
      export interface TokenPayload {
        admin?: boolean;
        exp?: number;
        user?: string;
        userID?: number;
      }
}
