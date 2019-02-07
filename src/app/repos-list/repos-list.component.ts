import { Component, OnInit } from '@angular/core';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Component({
  selector: 'repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {
  repos: Observable<Array<Clipper.Repo>>;
  p = 1;
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
        this.repos = Observable.of(res.repos)
        .do(resObs => {
          this.loading = false;
          this.total = res.total;
          this.p = page;
        });
      }
    });
  }

}
