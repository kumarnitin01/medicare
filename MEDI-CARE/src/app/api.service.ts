import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './config';
import { Observable, from } from 'rxjs';
import { CookieService } from './cookieService/cookie.service';

@Injectable({
  providedIn: 'root',
})
export class apiService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(params: any): Observable<any> {
    return this.http.post(config.api_url + 'admin/login', params);
  }

  addhos(params: any): Observable<any> {
    return this.http.post(config.api_url + 'admin/addhospital', params);
  }
  adddoc(params: any): Observable<any> {
    return this.http.post(config.api_url + 'admin/adddoctor', params);
  }

  getListData(): Observable<any> {
    return this.http.post(config.api_url + 'admin/listhospital', {});
  }
  getListDoc(): Observable<any> {
    return this.http.post(config.api_url + 'admin/listdoctor', {});
  }

  deletedetail(_id: any): Observable<any> {
    console.log(_id);
    return this.http.post(config.api_url + 'admin/deletedetail', { _id });
  }
  deletedoc(_id: any): Observable<any> {
    console.log(_id);
    return this.http.post(config.api_url + 'admin/deletedoc', { _id });
  }

  editdetails(_id: any): Observable<any> {
    return this.http.post(config.api_url + 'admin/editdetails', { _id });
  }

  updatedetails(params: any): Observable<any> {
    return this.http.post(config.api_url + 'admin/updatedetails', params);
  }

  // user handlers
  registerUser(params: any): Observable<any> {
    return this.http.post(config.api_url + 'register', params);
  }
  loginUser(params: any): Observable<any> {
    return this.http.post(config.api_url + 'loginUser', params);
  }
  contactInfo(params: any): Observable<any> {
    return this.http.post(config.api_url + 'contactus', params);
  }
}
