import { Component, OnInit, Input } from '@angular/core';
import { ClipperService } from '../services/clipper.service';

@Component({
  selector: 'create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent implements OnInit {
  @Input() properties: any = {repoID: 0}
  branch: string;
  branchSuccess: boolean;
  branchError: string = null;

  constructor(
    public clipper: ClipperService,
  ) { }

  ngOnInit() {
  }
  onBranchAdd() {
    this.clipper.addBranchConfig(this.branch, this.properties.repoID)
    .subscribe(res => {
      this.branchError = res.err;
      this.branchSuccess = !res.err;
    });
  }

}
