import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {ITeacher} from '../university/teacher/teacher.model';
import {TeacherService} from '../university/teacher/teacher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  teachers: ITeacher[] | null = null;

  constructor() { }

  ngOnInit(): void {

  }

}
