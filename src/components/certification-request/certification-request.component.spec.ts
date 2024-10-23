import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationRequestComponent } from './certification-request.component';

describe('CertificationRequestComponent', () => {
  let component: CertificationRequestComponent;
  let fixture: ComponentFixture<CertificationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
