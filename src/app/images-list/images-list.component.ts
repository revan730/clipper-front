import { Component, OnInit } from '@angular/core';
import { ClipperService } from '../services/clipper.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Component({
  selector: 'images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {
  images: Observable<Array<string>>;
  total: number;
  loading: boolean;

  constructor(
    public clipper: ClipperService,
  ) {
  }

  ngOnInit() {
    this.getImages();
  }

  removeImage(image: string) {
    const imageSplit = image.split('/');
    const imageName = imageSplit[imageSplit.length - 1]; 
    console.log(imageName);
    this.clipper.removeImage(imageName)
    .subscribe(res => {
      this.getImages();
    });
  }

  getImages() {
    this.loading = true;
    this.clipper.getImages()
    .subscribe(res => {
      this.images = Observable.of(res)
      .do(resObs => {
        this.loading = false;
        console.log(resObs);
      });
    });
  }

}
