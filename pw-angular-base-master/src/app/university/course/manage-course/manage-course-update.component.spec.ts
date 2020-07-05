import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCourseUpdateComponent } from './manage-course-update.component';

describe('ManageCourseUpdateComponent', () => {
  let component: ManageCourseUpdateComponent;
  let fixture: ComponentFixture<ManageCourseUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCourseUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCourseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
