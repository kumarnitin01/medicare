import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  list: any = [];
  spinner: any;
  nodata: any;

  constructor(private http: HttpClient) {}
  private Url = 'http://localhost:3000/docs'; // URL to web api
  ngOnInit(): void {
    this.spinner = document.getElementById('spinner');
    this.nodata = document.getElementById('no-data');

    this.spinner.classList.remove('hidden');
    this.nodata.classList.add('hidden');
    this._getdoc();
  }

  _getdoc(): any {
    this.http.get(this.Url).subscribe((data: any) => {
      this.list = data.data;
      this.spinner.classList.add('hidden');
      if (!this.list.length) this.nodata.classList.remove('hidden');
    });
  }
}
