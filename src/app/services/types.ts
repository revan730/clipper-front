
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
      export interface GetRepoResponse {
        repoID?: number;
        fullName?: string;
        err?: string
      }
      export namespace GetRepoRequest {
        export const link = (repoID) => genLink(`repos/${repoID}`);
      }
      export namespace GetBuildsRequest {
        export const link = (repoID) => genLink(`repos/${repoID}/builds`);
      }
      export interface Build {
        repoID: number;
        ID: number;
        isSuccessfull: boolean;
        date: Date;
        branch: string;
        stdout: string;
      }
      export interface GetBuildsResponse {
        total?: number;
        builds?: Array<Build>;
        err?: string;
      }
      export namespace GetBranchConfigsRequest {
        export const link = (repoID) => genLink(`repos/${repoID}/branch`);
      }
      export interface BranchConfig {
        branch: string;
        ciEnabled: boolean;
      }
      export interface GetBranchConfigsResponse {
        total?: number;
        configs?: Array<BranchConfig>;
        err?: string;
      }
      export namespace PostSecretRequest {
        export const link = genLink('user/secret');
      }
      export interface PostSecretRequest {
        secret: string;
      }
      export interface PostSecretResponse {
        err?: string;
      }
      export namespace PostAccessTokenRequest {
        export const link = genLink('user/accessToken');
      }
      export interface PostAccessTokenRequest {
        token: string;
      }
      export interface PostAccessTokenResponse {
        err?: string;
      }
}