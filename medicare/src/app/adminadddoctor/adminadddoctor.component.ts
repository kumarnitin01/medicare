import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { apiService } from '../api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-adminadddoctor',
  templateUrl: './adminadddoctor.component.html',
  styleUrls: ['./adminadddoctor.component.scss'],
})
export class AdminadddoctorComponent implements OnInit {
  validationform!: FormGroup;
  submit: boolean | undefined;
  error = '';
  success = '';
  dataList: any;
  editdatastatus: any;

  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: apiService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('success')) {
      this.editdatastatus = 'Data updated successfully';
    }
    this._fetchData();
    this.validationform = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      specilizeField: ['', Validators.required],
      hospital: ['', Validators.required],
      city: ['', Validators.required],
      phonenumber: ['', Validators.required],
      weekdays: ['', Validators.required],
      expr: ['', Validators.required],
    });
  }

  _fetchData() {
    this.service
      .getListDoc()
      .pipe(first())
      .subscribe(
        (data) => {
          if (data.status == true) {
            this.dataList = data.data;
          } else {
            this.error = 'No data found';
          }
        },
        (error) => {}
      );
  }
  delete(_id: any) {
    this.service
      .deletedoc(_id)
      .pipe(first())
      .subscribe(
        (data) => {
          if (data.status == true) {
            this._fetchData();
            this.success = data.msg;
          } else {
          }
        },
        (error) => {}
      );
  }

  get e() {
    return this.validationform.controls;
  }

  validSubmit() {
    this.submit = true;
    if (this.validationform.invalid) {
      return;
    }

    this.service
      .adddoc(this.validationform.value)
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
