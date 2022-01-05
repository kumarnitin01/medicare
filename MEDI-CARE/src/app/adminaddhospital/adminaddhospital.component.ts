import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { apiService } from '../api.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminaddhospital',
  templateUrl: './adminaddhospital.component.html',
  styleUrls: ['./adminaddhospital.component.scss'],
})
export class AdminaddhospitalComponent implements OnInit {
  validationform!: FormGroup;
  submit: boolean | undefined;
  error = '';
  success = '';
  editdata: any;
  edit_id: any;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private service: apiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let _id = this.route.snapshot.params.id;
    this.service
      .editdetails(_id)
      .pipe(first())
      .subscribe(
        (data) => {
          if (data.status == true) {
            this.editdata = data.listdata;
            this.edit_id = this.editdata[0]._id;
            this.validationform.controls['hospitalname'].setValue(
              this.editdata[0].hospitalname
            );
            this.validationform.controls['location'].setValue(
              this.editdata[0].location
            );
            this.validationform.controls['email'].setValue(
              this.editdata[0].email
            );
            this.validationform.controls['bed'].setValue(this.editdata[0].bed);
            this.validationform.controls['phone'].setValue(
              this.editdata[0].phone
            );
            this.validationform.controls['specilization'].setValue(
              this.editdata[0].specilization
            );
          } else {
          }
        },
        (error) => {}
      );
    this.validationform = this.formBuilder.group({
      hospitalname: ['', Validators.required],
      location: ['', Validators.required],
      email: ['', Validators.required],
      bed: ['', Validators.required],
      phone: ['', Validators.required],
      specilization: ['', Validators.required],
    });
  }

  get e() {
    return this.validationform.controls;
  }

  validSubmit() {
    this.submit = true;
    if (this.validationform.invalid) {
      return;
    }
    this.validationform.value.edit_id = this.edit_id;

    this.service
      .updatedetails(this.validationform.value)
      .pipe(first())
      .subscribe(
        (data) => {
          if (data.status == true) {
            this.success = data.msg;
            this.submit = false;
            this.edit_id = '';
            this.router.navigate(['/listhospital', { success: 'yes' }]);
          } else {
            this.error = data.msg;
          }
        },
        (error) => {
          this.error = error;
        }
      );

    this.service
      .addhos(this.validationform.value)
      .pipe(first())
      .subscribe(
        (data) => {
          if (data.status == true) {
            this.success = data.msg;
            this.submit = false;
            this.validationform.reset();
          } else {
            this.error = data.msg;
          }
        },
        (error) => {
          this.error = error;
        }
      );
  }
}
