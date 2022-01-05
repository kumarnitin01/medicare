import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../cookieService/cookie.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss'],
})
export class AdmindashboardComponent implements OnInit {
  constructor(private router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {}
  logout() {
    this.cookieService.deleteCookie('currentUser');
    this.cookieService.deleteCookie('status');
    this.router.navigate(['/admin']);
  }
}
