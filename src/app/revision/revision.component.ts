import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent implements OnInit {
  revisionID: number;
  revision: Clipper.Revision;

  constructor(
    public clipper: ClipperService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.revisionID = +params['id'];
      this.loadRevision();
    });
  }
  loadRevision() {
    this.clipper.getRevision(this.revisionID)
    .subscribe((res) => {
      this.revision = res;
    });
  }

}
