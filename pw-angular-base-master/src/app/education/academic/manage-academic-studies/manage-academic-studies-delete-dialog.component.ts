import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {AcademicService} from '../academic.service';
import {IAcademic} from '../academic.model';

@Component({
  selector: 'app-manage-academic-studies-delete-dialog',
  templateUrl: './manage-academic-studies-delete-dialog.component.html',
  styleUrls: ['./manage-academic-studies-delete-dialog.component.scss']
})
export class ManageAcademicStudiesDeleteDialogComponent implements OnInit {
  academic?: IAcademic;
  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private academicService: AcademicService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.academicService.deleteAcademic(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Academic successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting Academic with ID: ' + id , 'Error');
      });
  }

}
