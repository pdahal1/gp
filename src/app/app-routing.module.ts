import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  { path: 'customer-detail', component: CustomerDetailComponent },
  { path: 'uploadcomponent', component: UploadComponent },
  { path: 'home', component: HomeComponent },
  {path:'*', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
