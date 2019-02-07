import { Component, OnInit, Input } from '@angular/core';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Component({
  selector: 'revisions-list',
  templateUrl: './revisions-list.component.html',
  styleUrls: ['./revisions-list.component.css']
})
export class RevisionsListComponent implements OnInit {
  revisions: Observable<Array<Clipper.Revision>>;
  p = 1;
  total: number;
  loading: boolean;
  @Input() properties: any = {depID: 0};

  constructor(
    public clipper: ClipperService,
  ) { }

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page: number) {
    this.loading = true;
    this.clipper.getRevisions(this.properties.depID, page, 10)
    .subscribe(res => {
      if (!res.err) {
        this.revisions = Observable.of(res.revisions)
        .do(resObs => {
          this.loading = false;
          this.total = res.total;
          this.p = page;
        });
      }
    });
  }

}
