import { Component, OnInit, Input } from '@angular/core';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';

@Component({
  selector: 'builds-list',
  templateUrl: './builds-list.component.html',
  styleUrls: ['./builds-list.component.css']
})
export class BuildsListComponent implements OnInit {
  repos: Array<Clipper.Build>;
  p: number = 1;
  total: number;
  loading: boolean;
  @Input() properties: any = {repoID: 0, branch: 'master'}

  constructor(
    public clipper: ClipperService,
  ) { 
  }

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page: number) {
    this.loading = true;
    this.clipper.getBuilds(this.properties.repoID,
       this.properties.branch, page, 10)
    .subscribe(res => {
      if (!res.err) {
        this.repos = res.builds;
        this.total = res.total;
      }
    });
  }

}
