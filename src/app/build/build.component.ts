import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {
  buildID: number;
  build: Clipper.Build;

  constructor(
    public clipper: ClipperService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.buildID = +params['id'];
      this.loadBuild();
    });
  }
  loadBuild() {
    this.clipper.getBuild(this.buildID)
    .subscribe(res => {
      this.build = res;
    });
  }
}
