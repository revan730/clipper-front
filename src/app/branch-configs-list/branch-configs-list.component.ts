import { Component, OnInit, Input } from '@angular/core';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';

@Component({
  selector: 'branch-configs-list',
  templateUrl: './branch-configs-list.component.html',
  styleUrls: ['./branch-configs-list.component.css']
})
export class BranchConfigsListComponent implements OnInit {
  branchConfigs: Array<Clipper.BranchConfig>;
  p: number = 1;
  total: number;
  loading: boolean;
  @Input() properties: any = {repoID: 0}

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
        this.loading = false;
        this.branchConfigs = res.configs;
        this.total = res.total;
        this.p = page;
      }
    });
  }
}
