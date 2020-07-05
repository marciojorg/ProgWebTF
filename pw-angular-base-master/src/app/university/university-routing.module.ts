import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ManageCourseComponent} from './course/manage-course/manage-course.component';
import {ManageTeachersComponent} from './teacher/manage-teachers/manage-teachers.component';
import {ManageSubjectsComponent} from './subject/manage-subjects/manage-subjects.component';
import {CourseResolver} from './course/course.resolver';
import {ManageCourseDetailComponent} from './course/manage-course/manage-course-detail.component';
import {ManageCourseUpdateComponent} from './course/manage-course/manage-course-update.component';
import {SubjectResolver} from './subject/subject.resolver';
import {ManageSubjectsUpdateComponent} from './subject/manage-subjects/manage-subjects-update.component';
import {ManageSubjectsDetailComponent} from './subject/manage-subjects/manage-subjects-detail.component';
import {ManageTeachersUpdateComponent} from './teacher/manage-teachers/manage-teachers-update.component';
import {ManageTeachersDetailComponent} from './teacher/manage-teachers/manage-teachers-detail.component';
import {TeacherResolver} from './teacher/teacher.resolver';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'managecourse',
        component: ManageCourseComponent
      },
      {
        path: 'managecourse/:id/view',
        component: ManageCourseDetailComponent,
        resolve: {
          course: CourseResolver
        }
      },
      {
        path: 'managecourse/new',
        component: ManageCourseUpdateComponent,
        resolve: {
          course: CourseResolver
        }
      },
      {
        path: 'managecourse/:id/edit',
        component: ManageCourseUpdateComponent,
        resolve: {
          course: CourseResolver
        }
      },

      {
        path: 'managesubjects',
        component: ManageSubjectsComponent
      },
      {
        path: 'managesubjects/:id/view',
        component: ManageSubjectsDetailComponent,
        resolve: {
          subject: SubjectResolver
        }
      },
      {
        path: 'managesubjects/new',
        component: ManageSubjectsUpdateComponent,
        resolve: {
          subject: SubjectResolver
        }
      },
      {
        path: 'managesubjects/:id/edit',
        component: ManageSubjectsUpdateComponent,
        resolve: {
          subject: SubjectResolver
        }
      },
      {
        path: 'manageteachers',
        component: ManageTeachersComponent
      },
      {
        path: 'manageteachers/:id/view',
        component: ManageTeachersDetailComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'manageteachers/new',
        component: ManageTeachersUpdateComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'manageteachers/:id/edit',
        component: ManageTeachersUpdateComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
