import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {SubjectService} from '../subject.service';
import {Subject} from '../subject.model';

@Component({
  selector: 'app-manage-subjects-update',
  templateUrl: './manage-subjects-update.component.html',
  styleUrls: ['./manage-subjects-update.component.scss']
})
export class ManageSubjectsUpdateComponent implements OnInit {

  manageSubjectForm: FormGroup;
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private subjectService: SubjectService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ subject }) => {
      this.updateForm(subject);
    });
  }

  saveSubject(): void {
    this.isSaving = true;
    if (!this.manageSubjectForm.get(['id']).value) {
      this.subjectService.createSubject(this.manageSubjectForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Subject successfully created', 'Success');
          this.router.navigate(['/managesubjects']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new Subject', 'Error');
        });
    } else {
      this.subjectService.updateSubject(this.manageSubjectForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Subject successfully updated', 'Success');
          this.router.navigate(['/managesubjects']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new Subject', 'Error');
        });
    }
  }
  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.manageSubjectForm = new FormGroup({
      id: new FormControl(''),
      subjectNome: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      descricao: new FormControl('', [Validators.required]),
      ects: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      ano: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      codigo: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      formRecaptcha: new FormControl(null, [Validators.required])
    });
  }

  private updateForm(subject: Subject): void {
    this.manageSubjectForm.patchValue({
      id: subject.id,
      subjectNome: subject.subjectNome,
      descricao: subject.descricao,
      ects: subject.ects,
      ano: subject.ano,
      codigo: subject.codigo
    });
  }

}
