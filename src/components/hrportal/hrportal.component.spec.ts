import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrportalComponent } from './hrportal.component';

describe('HrportalComponent', () => {
  let component: HrportalComponent;
  let fixture: ComponentFixture<HrportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrportalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
