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
  constructor(private http: HttpClient) {}
  private Url = 'http://localhost:3000/docs'; // URL to web api
  ngOnInit(): void {
    this._getdoc();
  }

  _getdoc(): any {
    this.http.get(this.Url).subscribe((data: any) => {
      this.list = data.data;
      console.log(typeof this.list);
    });
  }
}
