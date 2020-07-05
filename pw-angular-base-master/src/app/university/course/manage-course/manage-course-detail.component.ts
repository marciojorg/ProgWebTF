import { Component, OnInit } from '@angular/core';
import {ICourse} from '../course.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-manage-course-detail',
  templateUrl: './manage-course-detail.component.html',
  styleUrls: ['./manage-course-detail.component.scss']
})
export class ManageCourseDetailComponent implements OnInit {
  course: ICourse | null = null;
  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ course }) => {
      this.course = course;
    });
  }
  previousState(): void {
    window.history.back();
  }

}
