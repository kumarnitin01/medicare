import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
})
export class HospitalsComponent implements OnInit {
  hospitals: any;
  webAPI: any = 'http://localhost:3000/hospitals';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this._getHospitals();
  }
  _getHospitals() {
    this.http.get(this.webAPI).subscribe((data: any) => {
      this.hospitals = data.data;
    });
  }
}
