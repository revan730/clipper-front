import { Component, OnInit } from '@angular/core';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Component({
  selector: 'deployments-list',
  templateUrl: './deployments-list.component.html',
  styleUrls: ['./deployments-list.component.css']
})
export class DeploymentsListComponent implements OnInit {
  deployments: Observable<Array<Clipper.Deployment>>;
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
    this.clipper.getDeployments(page, 10)
    .subscribe(res => {
      if (!res.err) {
        this.deployments = Observable.of(res.deployments)
        .do(resObs => {
          this.loading = false;
          this.total = res.total;
          this.p = page;
        });
      }
    });
  }

}
