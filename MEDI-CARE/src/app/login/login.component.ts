import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { apiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  validation!: FormGroup;
  submitted: boolean = false;
  constructor(
    public fb: FormBuilder,
    private service: apiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validation = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    // console.log(this.validation.value);
  }
  _initForm(): void {
    console.log(this.validation.value);
    this.validation.reset();
    this.submitted = false;
  }
  checkForm() {
    this.submitted = true;
    if (this.validation.valid) {
      this.service.loginUser(this.validation.value).subscribe((data) => {
        if (data) {
          localStorage.setItem('currentUser', JSON.stringify(data));
          console.log(data);
          console.log(localStorage.getItem('currentUser'));
          console.log('success!');
          this.router.navigate(['/']);
        } else {
          console.log('Error! wrong username or password');
        }
      });

      this._initForm();
    }
  }
}
