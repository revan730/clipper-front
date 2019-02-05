import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.css']
})
export class DeploymentComponent implements OnInit {
  deploymentID: number;
  deployment: Clipper.Deployment;
  repo: Clipper.Repo;
  scaleSuccess: boolean = false;
  scaleError: string = null;
  imageSuccess: boolean = false;
  imageError: string = null;
  replicas: number;
  artifacts: Array<Clipper.Artifact>;
  artifactID: number;

  constructor(
    public clipper: ClipperService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.deploymentID = +params['id'];

      this.loadDeployment();
    });
  }

  loadDeployment() {
    this.clipper.getDeployment(this.deploymentID)
    .subscribe((res) => {
      this.deployment = res;
      this.loadRepo(res.RepoID);
    })
  }
  loadRepo(repoID: number) {
    this.clipper.getRepo(repoID)
    .subscribe(res => {
      this.repo = res;
      this.loadRepoArtifacts();
    });
  }
  selectArtifact(artifactID: number) {
    this.artifactID = artifactID;
  }
  loadRepoArtifacts() {
    this.clipper.getArtifacts(this.repo.repoID, "master", 1, 20)
    .subscribe(res => {
      if (!res.err) {
        this.artifacts = res.artifacts;
        console.log(this.artifacts);
      }
    })
  }
  onScale() {
    this.clipper.scaleDeployment(this.deploymentID, this.replicas)
    .subscribe((res) => {
      this.scaleError = res.err;
      this.scaleSuccess = !res.err;
    })
  }
  onChangeImage() {
    this.clipper.changeDeploymentImage(this.deploymentID, this.artifactID)
    .subscribe((res) => {
      this.imageError = res.err;
      this.imageSuccess = !res.err;
    })
  }

}
