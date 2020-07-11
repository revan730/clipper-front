import { Component, OnInit } from '@angular/core';
import { ClipperService } from '../services/clipper.service';

@Component({
  selector: 'create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.css']
})
export class CreateImageComponent implements OnInit {
  photoFile: File;
  uploadSuccess: boolean;
  uploadError: string = null;

  constructor(
    public clipper: ClipperService,
  ) { }

  ngOnInit() {
  }

  onFileChange(event){
    this.uploadError = null;
    this.uploadSuccess = false;
    this.photoFile = event.target.files[0];
  }

  async onImageAdd() {
    if (this.photoFile) {
      console.log(this.photoFile.size);
      if (this.photoFile.type !== 'image/jpeg' && this.photoFile.type !== 'image/png') {
        this.uploadError = 'Неправильный тип файла';
        return;
      }
      if (this.photoFile.size > 1024 * 1024 * 5) {
        this.uploadError = 'Файл не должен быть больше 5 Мб';
        return;
      }
      await this.clipper.uploadImage(this.photoFile)
      .toPromise();
      this.uploadSuccess = true;
    }
  }
}
