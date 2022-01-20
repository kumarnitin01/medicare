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
  }
  _initForm(): void {
    this.submitted = false;
  }
  checkForm() {
    this.submitted = true;
    if (this.validation.valid) {
      this.service.loginUser(this.validation.value).subscribe((data) => {
        if (data) {
          localStorage.setItem('currUser', JSON.stringify(data));
          this.router.navigate(['/']);
        } else {
        }
      });

      this._initForm();
    }
  }
}
