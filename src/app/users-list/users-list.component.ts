import { Component, OnInit } from '@angular/core';
import { Clipper } from '../services/types';
import { ClipperService } from '../services/clipper.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Observable<Array<Clipper.User>>;
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
    this.clipper.getUsers(page, 10)
    .subscribe(res => {
      if (!res.err) {
        this.users = Observable.of(res.users)
        .do(resObs => {
            console.log(res);
          this.loading = false;
          this.total = res.total;
          this.p = page;
        });
      }
    });
  }

  changeAdminStatus(userID: number, admin: boolean) {
    this.clipper.changeUserAdminStatus(userID, admin)
    .subscribe(res => {
      if (!res.err) {
        this.getPage(this.p);
      }
    })
  }

}