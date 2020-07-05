import { Component, OnInit } from '@angular/core';
import {ICourse} from '../course.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {CourseService} from '../course.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ManageCourseDeleteDialogComponent} from './manage-course-delete-dialog.component';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss']
})
export class ManageCourseComponent implements OnInit {

  courses?: ICourse[] = [];
  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.courseService.getCourse().subscribe((data: ICourse[])  => {
      this.spinner.hide();
      this.courses = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: ICourse): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(course: ICourse): void {
    const modalRef = this.modalService.open(ManageCourseDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = course;
  }
}
