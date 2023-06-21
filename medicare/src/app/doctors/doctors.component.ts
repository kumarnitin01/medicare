import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  list: any = [];
  appointment!: FormGroup;
  spinner: any;
  nodata: any;
  submitted: boolean = false;
  appointmentData: any = {};

  constructor(private http: HttpClient, private fb: FormBuilder) {}
  private Url = config.api_url + 'docs'; // URL to web api
  ngOnInit(): void {
    this.spinner = document.getElementById('spinner');
    this.nodata = document.getElementById('no-data');

    this.spinner.classList.remove('hidden');
    this.nodata.classList.add('hidden');
    this._getdoc();
    this.appointment = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  _getdoc(): any {
    this.http.get(this.Url).subscribe((data: any) => {
      this.list = data.data;
      this.spinner.classList.add('hidden');
      if (!this.list.length) this.nodata.classList.remove('hidden');
    });
  }
  bookAppointment(): void {
    this.submitted = true;
    console.log(this.appointment.value);
    this.appointmentData = this.appointment.value;
    this.appointment.reset();
  }
}
