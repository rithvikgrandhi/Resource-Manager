import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCertificationDashboardComponent } from './employee-certification-dashboard.component';

describe('EmployeeCertificationDashboardComponent', () => {
  let component: EmployeeCertificationDashboardComponent;
  let fixture: ComponentFixture<EmployeeCertificationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCertificationDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCertificationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
