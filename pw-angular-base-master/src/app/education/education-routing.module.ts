import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAcademicStudiesComponent } from './academic/manage-academic-studies/manage-academic-studies.component';
import { ManageCertificationsComponent } from './certifications/manage-certifications/manage-certifications.component';
import {AcademicResolver} from './academic/academic.resolver';
import {ManageAcademicStudiesDetailComponent} from './academic/manage-academic-studies/manage-academic-studies-detail.component';
import {ManageAcademicStudiesUpdateComponent} from './academic/manage-academic-studies/manage-academic-studies-update.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manageacademicstudies',
        component: ManageAcademicStudiesComponent
      },
      {
        path: 'manageacademicstudies/:id/view',
        component: ManageAcademicStudiesDetailComponent,
        resolve: {
          project: AcademicResolver
        }
      },
      {
        path: 'manageacademicstudies/new',
        component: ManageAcademicStudiesUpdateComponent,
        resolve: {
          project: AcademicResolver
        }
      },
      {
        path: 'manageacademicstudies/:id/edit',
        component: ManageAcademicStudiesUpdateComponent,
        resolve: {
          project: AcademicResolver
        }
      },
      {
        path: 'maangecertifications',
        component: ManageCertificationsComponent
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EducationRoutingModule { }
