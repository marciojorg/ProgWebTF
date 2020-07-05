import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {TeacherService} from '../teacher.service';
import {Teacher} from '../teacher.model';

@Component({
  selector: 'app-manage-teachers-update',
  templateUrl: './manage-teachers-update.component.html',
  styleUrls: ['./manage-teachers-update.component.scss']
})
export class ManageTeachersUpdateComponent implements OnInit {

  manageTeacherForm: FormGroup;
  isSaving: boolean;
  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private teacherService: TeacherService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ teacher }) => {
      this.updateForm(teacher);
    });
  }
  saveTeacher(): void {
    this.isSaving = true;
    if (!this.manageTeacherForm.get(['id']).value) {
      this.teacherService.createTeacher(this.manageTeacherForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Teacher successfully created', 'Success');
          this.router.navigate(['/manageteachers']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new project', 'Error');
        });
    } else {
      this.teacherService.updateTeacher(this.manageTeacherForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Teacher successfully updated', 'Success');
          this.router.navigate(['/manageteachers']);
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
    this.manageTeacherForm = new FormGroup({
      id: new FormControl(''),
      teacherNome: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      teacherApelido: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      descricaot: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,  Validators.maxLength(30)]),
      habilitacoesAcademicas: new FormControl('', [Validators.required]),
      imagem: new FormControl(),
      formRecaptcha: new FormControl(null, [Validators.required]),
    });
  }

  private updateForm(teacher: Teacher): void {
    this.manageTeacherForm.patchValue({
      id: teacher.id,
      teacherNome: teacher.teacherNome,
      teacherApelido: teacher.teacherApelido,
      descricaot: teacher.descricaot,
      email: teacher.email,
      habilitacoesAcademicas: teacher.habilitacoesAcademicas,
      imagem: teacher.imagem
    });
  }

}
