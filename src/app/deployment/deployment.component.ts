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
    });
  }

}
