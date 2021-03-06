import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationRoutingModule } from './education-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ManageAcademicStudiesComponent } from './academic/manage-academic-studies/manage-academic-studies.component';
import { ManageCertificationsComponent } from './certifications/manage-certifications/manage-certifications.component';
import { ManageAcademicStudiesUpdateComponent } from './academic/manage-academic-studies/manage-academic-studies-update.component';
import { ManageAcademicStudiesDeleteDialogComponent } from './academic/manage-academic-studies/manage-academic-studies-delete-dialog.component';
import { ManageAcademicStudiesDetailComponent } from './academic/manage-academic-studies/manage-academic-studies-detail.component';
import { ManageCertificationsDeleteDialogComponent } from './certifications/manage-certifications/manage-certifications-delete-dialog.component';
import { ManageCertificationsDetailComponent } from './certifications/manage-certifications/manage-certifications-detail.component';
import { ManageCertificationsUpdateComponent } from './certifications/manage-certifications/manage-certifications-update.component';


@NgModule({
  declarations: [
    ManageAcademicStudiesComponent,
    ManageCertificationsComponent,
    ManageAcademicStudiesUpdateComponent,
    ManageAcademicStudiesDeleteDialogComponent,
    ManageAcademicStudiesDetailComponent,
    ManageCertificationsDeleteDialogComponent,
    ManageCertificationsDetailComponent,
    ManageCertificationsUpdateComponent],
  imports: [
    CommonModule,
    SharedModule,
    EducationRoutingModule
  ],
  entryComponents: [ManageAcademicStudiesDeleteDialogComponent, ManageCertificationsDeleteDialogComponent]
})
export class EducationModule { }
