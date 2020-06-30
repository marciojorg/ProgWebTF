import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAcademicStudiesDeleteDialogComponent } from './manage-academic-studies-delete-dialog.component';

describe('ManageAcademicStudiesDeleteDialogComponent', () => {
  let component: ManageAcademicStudiesDeleteDialogComponent;
  let fixture: ComponentFixture<ManageAcademicStudiesDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAcademicStudiesDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAcademicStudiesDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
