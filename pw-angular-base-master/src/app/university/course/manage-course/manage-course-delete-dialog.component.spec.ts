import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCourseDeleteDialogComponent } from './manage-course-delete-dialog.component';

describe('ManageCourseDeleteDialogComponent', () => {
  let component: ManageCourseDeleteDialogComponent;
  let fixture: ComponentFixture<ManageCourseDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCourseDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCourseDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
