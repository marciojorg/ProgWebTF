import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {AcademicService} from '../academic.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {IAcademic} from '../academic.model';
import {ManageAcademicStudiesDeleteDialogComponent} from './manage-academic-studies-delete-dialog.component';

@Component({
  selector: 'app-manage-academic-studies',
  templateUrl: './manage-academic-studies.component.html',
  styleUrls: ['./manage-academic-studies.component.scss']
})
export class ManageAcademicStudiesComponent implements OnInit {
  academics?: IAcademic[] = [];
  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private academicService: AcademicService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.academicService.getAcademics().subscribe((data: IAcademic[])  => {
      this.spinner.hide();
      this.academics = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: IAcademic): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(academic: IAcademic): void {
    const modalRef = this.modalService.open(ManageAcademicStudiesDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.academic = academic;
  }

}
