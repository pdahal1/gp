import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { FormBuilder, FormsModule } from '@angular/forms';
import { UploadtaskComponent } from './uploadtask/uploadtask.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { HomeComponent } from './home/home.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    UploadtaskComponent,
    CustomerDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    AngularFireModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    FormsModule,
    NgxPayPalModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [UploadtaskComponent, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
