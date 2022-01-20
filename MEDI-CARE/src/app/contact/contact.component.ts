import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { apiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact!: FormGroup;

  constructor(private fb: FormBuilder, private service: apiService) {}

  ngOnInit(): void {
    this.contact = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  contactForm(): void {
    this.service.contactInfo(this.contact.value).subscribe((data) => {});
  }
}
