import { Component, OnInit } from '@angular/core';
import {ISubject} from '../subject.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-manage-subjects-detail',
  templateUrl: './manage-subjects-detail.component.html',
  styleUrls: ['./manage-subjects-detail.component.scss']
})
export class ManageSubjectsDetailComponent implements OnInit {
  subject: ISubject | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ subject }) => {
      this.subject = subject;
    });
  }
  previousState(): void {
    window.history.back();
  }

}
