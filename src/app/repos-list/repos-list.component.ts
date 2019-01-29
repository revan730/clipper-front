import { Component, OnInit } from '@angular/core';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';

@Component({
  selector: 'repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {
  repos: Array<Clipper.Repo>;
  p: number = 1;
  total: number;
  loading: boolean;

  constructor(
    public clipper: ClipperService,
  ) { }

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page: number) {
    this.loading = true;
    this.clipper.getRepos(page, 10)
    .subscribe(res => {
      if (!res.err) {
        this.repos = res.repos;
        this.total = res.total;
      }
    });
  }

}
