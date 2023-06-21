import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user = localStorage.getItem('currUser') || undefined;
  profile: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  logout(): void {
    localStorage.removeItem('currUser');
    this.user = undefined;
    this.router.navigate(['/register/login']);
  }
  display(): void {
    this.profile = document.getElementById('profile-template');
    this.profile.classList.toggle('show');
  }
}
