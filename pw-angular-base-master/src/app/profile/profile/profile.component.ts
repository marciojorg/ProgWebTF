import { Component, OnInit } from '@angular/core';
import {ITeacher} from '../../university/teacher/teacher.model';
import {ProjectService} from '../../project/project.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {TeacherService} from '../../university/teacher/teacher.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  teachers: ITeacher[] | null = null;

  constructor(private teacherService: TeacherService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.teacherService.getTeachers().subscribe(data => {
      this.spinner.hide();
      this.teachers = data;
    }, err => {
      this.spinner.hide();
    });

  }

}
