import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobPostsComponent } from './list-job-posts.component';

describe('ListJobPostsComponent', () => {
  let component: ListJobPostsComponent;
  let fixture: ComponentFixture<ListJobPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListJobPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListJobPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
