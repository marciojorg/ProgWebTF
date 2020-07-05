import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CourseService} from '../course.service';
import {Course} from '../course.model';

@Component({
  selector: 'app-manage-course-update',
  templateUrl: './manage-course-update.component.html',
  styleUrls: ['./manage-course-update.component.scss']
})
export class ManageCourseUpdateComponent implements OnInit {

  manageCourseForm: FormGroup;
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ course }) => {
      this.updateForm(course);
    });
  }

  saveAcademic(): void {
    this.isSaving = true;
    if (!this.manageCourseForm.get(['id']).value) {
      this.courseService.createCourse(this.manageCourseForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Course successfully created', 'Success');
          this.router.navigate(['/managecourse']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new project', 'Error');
        });
    } else {
      this.courseService.updateCourse(this.manageCourseForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Course successfully updated', 'Success');
          this.router.navigate(['/managecourse']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new project', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.manageCourseForm = new FormGroup({
      id: new FormControl(''),
      cursoNome: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      descricao: new FormControl('', [Validators.required]),
      grau: new FormControl('', [Validators.required]),
      duracao: new FormControl('', [Validators.required]),
      etcs: new FormControl('', [Validators.required]),
      formRecaptcha: new FormControl(null, [Validators.required]),
    });
  }

  private updateForm(course: Course): void {
    this.manageCourseForm.patchValue({
      id: course.id,
      cursoNome: course.cursoNome,
      descricao: course.descricao,
      grau: course.grau,
      duracao: course.duracao,
      etcs: course.etcs,
    });
  }

}
