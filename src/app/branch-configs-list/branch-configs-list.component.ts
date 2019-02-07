import { Component, OnInit, Input } from '@angular/core';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Component({
  selector: 'branch-configs-list',
  templateUrl: './branch-configs-list.component.html',
  styleUrls: ['./branch-configs-list.component.css']
})
export class BranchConfigsListComponent implements OnInit {
  branchConfigs: Observable<Array<Clipper.BranchConfig>>;
  p = 1;
  total: number;
  loading: boolean;
  @Input() properties: any = {repoID: 0};

  constructor(
    public clipper: ClipperService,
  ) {
  }

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page: number) {
    this.loading = true;
    this.clipper.getBranchConfigs(this.properties.repoID,
      page, 10)
    .subscribe(res => {
      if (!res.err) {
        this.branchConfigs = Observable.of(res.configs)
        .do(resObs => {
          this.loading = false;
          this.total = res.total;
          this.p = page;
        });
      }
    });
  }
}
