import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { apiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private service: apiService) {}

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
  }
  validation(): void {
    this.submitted = true;
    console.log(this.signUpForm.value);
    if (
      this.signUpForm.valid &&
      this.signUpForm.value.password === this.signUpForm.value.passwordMatch
    ) {
      delete this.signUpForm.value.passwordMatch;
      console.log(this.signUpForm.value);
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
