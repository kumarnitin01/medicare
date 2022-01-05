import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiService } from '../api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-adminlisthospital',
  templateUrl: './adminlisthospital.component.html',
  styleUrls: ['./adminlisthospital.component.scss'],
})
export class AdminlisthospitalComponent implements OnInit {
  dataList: any;
  error: any;
  success: any;
  editdatastatus: any;
  constructor(private route: ActivatedRoute, private service: apiService) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('success')) {
      this.editdatastatus = 'Data updated successfully';
    }
    this._fetchData();
  }

  _fetchData() {
    this.service
      .getListData()
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
      .deletedetail(_id)
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
}
