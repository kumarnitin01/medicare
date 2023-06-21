import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlisthospitalComponent } from './adminlisthospital.component';

describe('AdminlisthospitalComponent', () => {
  let component: AdminlisthospitalComponent;
  let fixture: ComponentFixture<AdminlisthospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlisthospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlisthospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
