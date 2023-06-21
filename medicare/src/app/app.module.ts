import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuardService } from './auth-guard.service';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterContainerComponent } from './register-container/register-container.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { CentresComponent } from './centres/centres.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminaddhospitalComponent } from './adminaddhospital/adminaddhospital.component';
import { AdminadddoctorComponent } from './adminadddoctor/adminadddoctor.component';
import { EditblogComponent } from './editblog/editblog.component';
import { AdminlisthospitalComponent } from './adminlisthospital/adminlisthospital.component';
import { UserresponseComponent } from './userresponse/userresponse.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    ServicesComponent,
    NewsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    RegisterContainerComponent,
    HospitalsComponent,
    DoctorsComponent,
    CentresComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AdminhomeComponent,
    AdminaddhospitalComponent,
    AdminadddoctorComponent,
    EditblogComponent,
    AdminlisthospitalComponent,
    UserresponseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
