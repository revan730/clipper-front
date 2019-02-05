import { NumberValueAccessor } from "@angular/forms/src/directives";

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
      export namespace AddRepoRequest {
        export const link = GetReposRequest.link;
      }
      export interface AddRepoRequest {
        fullName: string;
      }
      export interface AddRepoResponse {
        err?: string;
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
      export namespace GetBuildRequest {
        export const link = (buildID) => genLink(`builds/${buildID}`);
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
      export namespace AddBranchConfigRequest {
        export const link = GetBranchConfigsRequest.link;
      }
      export interface AddBranchConfigRequest {
        branch: string;
      }
      export interface AddBranchConfigResponse {
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
      export interface Deployment {
        ID: number;
        Branch: string;
        RepoID: number;
        ArtifactID: number;
        K8SName: string;
        Manifest: string;
        isInitialized: boolean;
        Replicas: number;
      }
      export namespace GetDeploymentRequest {
        export const link = (depID) => genLink(`admin/deployments/${depID}`);
      }
      export namespace GetDeploymentsRequest {
        export const link = genLink('admin/deployments');
      }
      export interface GetDeploymentsResponse {
        total?: number;
        deployments?: Array<Deployment>;
        err?: string;
      }
      export interface Artifact {
        ID: number;
        name: number;
      }
      export namespace GetArtifactsRequest {
        export const link = (repoID) => genLink(`repos/${repoID}/artifacts`);
      }
      export interface GetArtifactsResponse {
        total?: number;
        artifacts?: Array<Artifact>;
        err?: string;
      }
      export namespace PostDeploymentRequest {
        export const link = genLink('admin/deployments');
      }
      export interface PostDeploymentRequest {
        branch: string;
        repoID: number;
        artifactID: number;
        k8sName: string;
        manifest: string;
        replicas: number;
      }
      export interface PostDeploymentResponse {
        err?: string;
      }
      export interface Revision {
        ID: number;
        deploymentID: number;
        artifactID: number;
        date: Date;
        replicas: number;
        stdout: string;
      }
      export namespace GetRevisionsRequest {
        export const link = (depID) => genLink(`admin/deployments/${depID}/revisions`);
      }
      export interface GetRevisionsResponse {
        total?: number;
        revisions?: Array<Revision>;
        err?: string;
      }
      export namespace ScaleDeploymentRequest {
        export const link = (depID) => genLink(`admin/deployments/${depID}/scale`);
      }
      export interface ScaleDeploymentRequest {
        replicas: number;
      }
      export interface ScaleDeploymentResponse {
        err?: string;
      }
}