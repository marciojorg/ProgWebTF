import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCourseComponent } from './course/manage-course/manage-course.component';
import { ManageCourseDeleteDialogComponent } from './course/manage-course/manage-course-delete-dialog.component';
import { ManageCourseDetailComponent } from './course/manage-course/manage-course-detail.component';
import { ManageCourseUpdateComponent } from './course/manage-course/manage-course-update.component';
import {UniversityRoutingModule} from './university-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ManageSubjectsComponent } from './subject/manage-subjects/manage-subjects.component';
import { ManageSubjectsDeleteDialogComponent } from './subject/manage-subjects/manage-subjects-delete-dialog.component';
import { ManageSubjectsDetailComponent } from './subject/manage-subjects/manage-subjects-detail.component';
import { ManageSubjectsUpdateComponent } from './subject/manage-subjects/manage-subjects-update.component';
import { ManageTeachersComponent } from './teacher/manage-teachers/manage-teachers.component';
import { ManageTeachersDeleteDialogComponent } from './teacher/manage-teachers/manage-teachers-delete-dialog.component';
import { ManageTeachersDetailComponent } from './teacher/manage-teachers/manage-teachers-detail.component';
import { ManageTeachersUpdateComponent } from './teacher/manage-teachers/manage-teachers-update.component';



@NgModule({
  declarations: [
    ManageCourseComponent,
    ManageCourseDeleteDialogComponent,
    ManageCourseDetailComponent,
    ManageCourseUpdateComponent,
    ManageSubjectsComponent,
    ManageSubjectsDeleteDialogComponent,
    ManageSubjectsDetailComponent,
    ManageSubjectsUpdateComponent,
    ManageTeachersComponent,
    ManageTeachersDeleteDialogComponent,
    ManageTeachersDetailComponent,
    ManageTeachersUpdateComponent],
  imports: [
    CommonModule,
    SharedModule,
    UniversityRoutingModule
  ],
  entryComponents: [
    ManageCourseDeleteDialogComponent,
    ManageSubjectsDeleteDialogComponent,
    ManageTeachersDeleteDialogComponent]
})
export class UniversityModule { }
