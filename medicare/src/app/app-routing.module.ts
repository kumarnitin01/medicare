import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterContainerComponent } from './register-container/register-container.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { CentresComponent } from './centres/centres.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminadddoctorComponent } from './adminadddoctor/adminadddoctor.component';
import { AdminaddhospitalComponent } from './adminaddhospital/adminaddhospital.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminlisthospitalComponent } from './adminlisthospital/adminlisthospital.component';
import { EditblogComponent } from './editblog/editblog.component';
import { UserresponseComponent } from './userresponse/userresponse.component';

import { AuthGuardService as AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'news', component: NewsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'hospitals', component: HospitalsComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'centres', component: CentresComponent },
    ],
  },
  {
    path: 'register',
    component: RegisterContainerComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  { path: 'admin', component: AdminloginComponent },
  { path: 'admin/login', component: AdminloginComponent },
  {
    path: 'dashboard',
    component: AdmindashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AdminhomeComponent },
      { path: 'addhospital', component: AdminaddhospitalComponent },
      // { path: 'addlab', component: AddlabComponent },
      { path: 'adddoctor', component: AdminadddoctorComponent },
      { path: 'listhospital', component: AdminlisthospitalComponent },
      { path: 'editblog', component: EditblogComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// {
//     path: 'dashboard',
//     component: DashboardComponent,
//     canActivate: [AuthGuard],
//     children: [
//       { path: '', component: DashboardHomeComponent },
//       { path: 'addhospital', component: AddhospitalComponent },
//       { path: 'addlab', component: AddlabComponent },
//       { path: 'adddoctor', component: AdddoctorComponent },
//       { path: 'listhospital', component: ListhospitalComponent },
//       { path: 'editblog', component: EditblogComponent },
//     ],
//   },
