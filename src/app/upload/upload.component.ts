import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { UploadtaskComponent } from '../uploadtask/uploadtask.component';
import { UploadService } from '../upload.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments'; 
import { NgxPayPalModule } from 'ngx-paypal';


declare let paypal: any; 


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  images: any = [];
  allFiles: any = [];
  sendIt: any = [];
  task: AngularFireUploadTask;
  tbu: any = [];
  show = true;
  color = "";
  pxs = "5px";
  finalList: any = [];
  price: number = 7.99;
  //disabled: false; 
  display: boolean;
  numberOfImagesUPloaded: number = 0;
  filesCount: any;
  addScript: boolean = false;
  paypalLoad: boolean = true; 
 
  
   
 

  

  constructor(private uploadservice: UploadService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private formGroup: FormBuilder,
    private router: Router,
    private upt: UploadtaskComponent,) {
  
   

    
   }

  ngOnInit() {
    
  }
  // fileUploads(event) {
  //   const files = event.target.files; 
  //   console.log(files);

  //   if (files) {
  //     for (let i = 0; i < files.length; i++){
  //       const image = {
  //         name: "", 
  //         type: "", 
  //         size: "", 
  //         url: ''
  //       }; 
  //       this.allFiles.push(files[i]);
  //       console.log(this.allFiles + "display as they are uploaded")
  //       image.name = files[i].name; 
  //       image.type = files[i].type; 
  //       image.size = files[i].size;
  //       const reader = new FileReader(); 
  //       reader.onload = (filedata) => {
  //         image.url = reader.result + '';
  //         this.images.push(image); 
  
  //       }; 
  //       reader.readAsDataURL(files[i]); 
        
  //     }
  //   }
  //   event.srcElement.value=null; 
  // }

  fileUploads(event) {
    //this.numberOfImagesUPloaded = null;
    const files = event.target.files; 
    if (files) {
      for (let i = 0; i < files.length; i++){
        const image = {
          name: "", 
          type: "", 
          size: "", 
          url: ''
        }; 
        //this.allFiles.push(files[i]);
        //console.log(this.allFiles + "display as they are uploaded")
        image.name = files[i].name; 
        image.type = files[i].type; 
        image.size = files[i].size;
        const reader = new FileReader(); 
        reader.onload = (filedata) => {
          image.url = reader.result + '';
          this.images.push(image); 
          if (this.images.length > 0) {
      this.display = true; 
    } else {
      this.display = false; 
          }
          
           
        }; 
        
        reader.readAsDataURL(files[i]); 
        //this.filesCount = this.images.length;
        
      }
     // this.numberOfImagesUPloaded = this.images.length;
    }
    event.srcElement.value = null; 
    
    
  }

  
  // deleteImage(image: any) {
  //   const index = this.images.indexOf(image);
  //   this.images.splice(index, 1); 
  //   console.log(this.images + " images after delete");
  //   this.allFiles.splice(index, 1);
  //   console.log(this.allFiles + " all files after delete")
  //   console.log(this.sendIt + " sendit after delete"); 
  //   this.numberOfImagesUPloaded = this.finalList.length; 
  // }

  deleteImage(image: any) {
    const index = this.images.indexOf(image);
    this.images.splice(index, 1); 
    console.log(this.images[1])
    this.numberOfImagesUPloaded = this.images.length; 
    //   if (this.images.length > 0) {
    //   this.display = true; 
    // } else {
    //   this.display = false; 
    // }
    //this.numberOfImagesUPloaded = this.images.length;
    //console.log(this.images + " images after delete");
    //this.allFiles.splice(index, 1);
    //console.log(this.allFiles + " all files after delete")
    //console.log(this.sendIt + " sendit after delete"); 
    //this.numberOfImagesUPloaded = this.finalList.length; 
  }
//  total price: {{numberOfImagesUPloaded * price}}

  send() {
    this.uploadservice.sendClickEvent();  
  }

  done() {
    //this.filesCount = []; 
     this.images.forEach((f: any) => {
       this.finalList.push(f); 
       this.numberOfImagesUPloaded = this.finalList.length; 
      
       
    })
    console.log(" you uploaded " + this.numberOfImagesUPloaded  + " images")
    //console.log(this.finalList + " this is the final list")
    //this.router.navigate(["/customer-detail"]);
  }

  // next() {
  //     this.images.forEach((f: any) => {
  //      this.finalList.push(f); 
  //      this.numberOfImagesUPloaded = this.finalList.length; 
             
  //   })
    
  // }



  

}
