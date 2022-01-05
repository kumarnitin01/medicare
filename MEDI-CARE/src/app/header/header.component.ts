import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user = localStorage.getItem('currentUser') || undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  logout(): void {
    console.log('logout');
    localStorage.removeItem('currentUser');
    this.user = undefined;
    this.router.navigate(['/register/login']);
  }
}
