import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationDashboardComponent } from './certification-dashboard.component';

describe('CertificationDashboardComponent', () => {
  let component: CertificationDashboardComponent;
  let fixture: ComponentFixture<CertificationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
