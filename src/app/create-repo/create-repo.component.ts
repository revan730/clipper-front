import { Component, OnInit } from '@angular/core';
import { ClipperService } from '../services/clipper.service';

@Component({
  selector: 'create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.css']
})
export class CreateRepoComponent implements OnInit {
  fullName: string;
  fullNameSuccess: boolean;
  fullNameError: string = null;

  constructor(
    public clipper: ClipperService,
  ) { }

  ngOnInit() {
  }
  onRepoAdd() {
    this.clipper.addRepo(this.fullName)
    .subscribe(res => {
      this.fullNameError = res.err;
      this.fullNameSuccess = !res.err;
    });
  }

}
