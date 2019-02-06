import { Component, OnInit } from '@angular/core';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'create-deployment',
  templateUrl: './create-deployment.component.html',
  styleUrls: ['./create-deployment.component.css']
})
export class CreateDeploymentComponent implements OnInit {
  k8sName: string;
  branch: string;
  selectedRepo: number;
  selectedArtifact: number;
  repos: Array<Clipper.Repo>;
  repoID: number;
  artifacts: Array<Clipper.Artifact>;
  artifactID: number;
  manifest: string;
  createSuccess: boolean = false;
  createError: string = null;
  replicas: number;

  constructor(
    public clipper: ClipperService,
  ) { }

  ngOnInit() {
    this.loadRepos();
  }

  loadRepos() {
    this.clipper.getRepos(1, 20)
    .subscribe(res => {
      if (!res.err) {
        this.repos = res.repos;
      }
    });
  }
  loadRepoArtifacts(i: string) {
    this.repoID = Number(i);
    this.clipper.getArtifacts(this.repoID, "master", 1, 20)
    .subscribe(res => {
      if (!res.err) {
        this.artifacts = res.artifacts;
        console.log(this.artifacts);
      }
    })
  }
  selectArtifact(i: string) {
    this.artifactID = Number(i);
  }
  onDeploymentCreate() {
    const dep = {
      k8sName: this.k8sName,
      branch: this.branch,
      repoID: this.repoID,
      artifactID: this.artifactID,
      manifest: this.manifest,
      replicas: this.replicas
    }
    this.clipper.addDeployment(dep)
    .subscribe(res => {
      this.createError = res.err;
      this.createSuccess = !res.err;
    })
  }
}
