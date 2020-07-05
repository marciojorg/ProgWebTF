import { Component, OnInit } from '@angular/core';
import {ICourse} from '../course.model';
import {CourseService} from '../course.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-manage-course-delete-dialog',
  templateUrl: './manage-course-delete-dialog.component.html',
  styleUrls: ['./manage-course-delete-dialog.component.scss']
})
export class ManageCourseDeleteDialogComponent implements OnInit {
  course?: ICourse;
  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private courseService: CourseService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }
  confirmDelete(id: string): void {
    this.courseService.deleteCourse(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Course successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting course with ID: ' + id , 'Error');
      });
  }

}
