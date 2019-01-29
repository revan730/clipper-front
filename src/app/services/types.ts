
export namespace Clipper {
    export const globalLink = 'http://clipper.revan730.tk/api/v1/';
    function genLink(a: string) {
        return globalLink + a;
      }
      export interface RegisterRequest {
        login: string;
        password: string;
      }
      export namespace RegisterRequest {
        export const link = genLink('register');
      }
      export interface RegisterResponse {
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
      export namespace GetReposRequest {
        export const link = genLink('repos');
      }
      export interface Repo {
        repoID: number;
        fullName: string;
      }
      export interface GetReposResponse {
        total?: number;
        repos?: Array<Repo>;
        err?: string;
      }
}