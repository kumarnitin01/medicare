import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { apiService } from '../api.service';
import { CookieService } from '../cookieService/cookie.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss'],
})
export class AdminloginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: boolean = false;
  errorMsg = '';

  constructor(
    public fb: FormBuilder,
    private service: apiService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get e() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.service.login(this.loginForm.value).subscribe((resp) => {
      if (!resp.status) {
        this.errorMsg = resp.msg;
        console.log(this.errorMsg);
      } else {
        //localStorage.setItem("token", resp.token);
        localStorage.setItem('currentUser', JSON.stringify(resp.data));
        this.cookieService.setCookie('status', resp.status, 1);
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
