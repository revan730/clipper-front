import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repoID: number;
  repo: Clipper.Repo;
  deleteError: string = null;

  constructor(
    public clipper: ClipperService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.repoID = +params['id'];

      this.loadRepo();
    });
  }

  loadRepo() {
    this.clipper.getRepo(this.repoID)
    .subscribe(res => {
      this.repo = res;
    });
  }
  onRepoDelete() {
    this.clipper.deleteRepo(this.repoID)
    .subscribe(res => {
      this.deleteError = res.err;
      if (!res.err) {
        this.router.navigateByUrl('/userDash');
      }
    })
  }
}
