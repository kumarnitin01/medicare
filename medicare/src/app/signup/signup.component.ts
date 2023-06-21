import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { apiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private service: apiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
      passwordMatch: ['', Validators.required],
    });
  }
  _initForm(): void {
    this.signUpForm.reset();
    this.submitted = false;
    this.router.navigate(['/register/login']);
  }
  validation(): void {
    this.submitted = true;
    if (
      this.signUpForm.valid &&
      this.signUpForm.value.password === this.signUpForm.value.passwordMatch
    ) {
      delete this.signUpForm.value.passwordMatch;
      // posting user data
      this.service
        .registerUser(this.signUpForm.value)
        .subscribe((data: any) => {
          console.log(data);
        });
      this._initForm();
    }
  }
}
