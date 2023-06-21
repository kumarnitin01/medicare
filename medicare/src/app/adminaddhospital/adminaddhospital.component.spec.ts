import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddhospitalComponent } from './adminaddhospital.component';

describe('AdminaddhospitalComponent', () => {
  let component: AdminaddhospitalComponent;
  let fixture: ComponentFixture<AdminaddhospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddhospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
