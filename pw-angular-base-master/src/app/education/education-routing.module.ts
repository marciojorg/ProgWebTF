import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAcademicStudiesComponent } from './academic/manage-academic-studies/manage-academic-studies.component';
import { ManageCertificationsComponent } from './certifications/manage-certifications/manage-certifications.component';
import {AcademicResolver} from './academic/academic.resolver';
import {ManageAcademicStudiesDetailComponent} from './academic/manage-academic-studies/manage-academic-studies-detail.component';
import {ManageAcademicStudiesUpdateComponent} from './academic/manage-academic-studies/manage-academic-studies-update.component';
import {ManageCertificationsDetailComponent} from './certifications/manage-certifications/manage-certifications-detail.component';
import {CertificationResolver} from './certifications/certification.resolver';
import {ManageCertificationsUpdateComponent} from './certifications/manage-certifications/manage-certifications-update.component';

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
          academic: AcademicResolver
        }
      },
      {
        path: 'manageacademicstudies/new',
        component: ManageAcademicStudiesUpdateComponent,
        resolve: {
          academic: AcademicResolver
        }
      },
      {
        path: 'manageacademicstudies/:id/edit',
        component: ManageAcademicStudiesUpdateComponent,
        resolve: {
          academic: AcademicResolver
        }
      },
      {
        path: 'maangecertifications',
        component: ManageCertificationsComponent
      },
      {
        path: 'maangecertifications/:id/view',
        component: ManageCertificationsDetailComponent,
        resolve: {
          certification: CertificationResolver
        }
      },
      {
        path: 'maangecertifications/new',
        component: ManageCertificationsUpdateComponent,
        resolve: {
          certification: CertificationResolver
        }
      },
      {
        path: 'maangecertifications/:id/edit',
        component: ManageCertificationsUpdateComponent,
        resolve: {
          certification: CertificationResolver
        }
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EducationRoutingModule { }
