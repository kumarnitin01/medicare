import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
})
export class HospitalsComponent implements OnInit {
  hospitals: any = [];
  webAPI: any = config.api_url + 'hospitals';
  spinner: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.spinner = document.getElementById('spinner');

    this._getHospitals();
  }
  _getHospitals() {
    this.http.get(this.webAPI).subscribe((data: any) => {
      this.hospitals = data.data;
      console.log(this.hospitals);
      this.spinner.classList.add('hidden');
    });
  }
}
