import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-uploadtask',
  templateUrl: './uploadtask.component.html',
  styleUrls: ['./uploadtask.component.css']
})
export class UploadtaskComponent implements OnInit {
  @Input() allFile: File;
  task: AngularFireUploadTask;
  clickEventsubscription:Subscription;
  constructor(private uploadservice: UploadService, private storage: AngularFireStorage,) { 
    this.clickEventsubscription =
      this.uploadservice.getClickEvent().subscribe(() => {
        this.uploadImages();
      })
  }

  ngOnInit() {
    //this.uploadImages();
  }



  uploadImages() {


    //console.log(this.allFiles + "first file"); 
    // The storage path
    const path = `path/${Date.now()}_${this.allFile.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    //The main task
    this.task = this.storage.upload(path, this.allFile);
  }
  

}

