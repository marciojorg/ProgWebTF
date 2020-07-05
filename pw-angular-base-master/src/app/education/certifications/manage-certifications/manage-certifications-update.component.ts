import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CertificationService} from '../certification.service';
import {Certification} from '../certification.model';

@Component({
  selector: 'app-manage-certifications-update',
  templateUrl: './manage-certifications-update.component.html',
  styleUrls: ['./manage-certifications-update.component.scss']
})
export class ManageCertificationsUpdateComponent implements OnInit {

  manageCertificationsForm: FormGroup;
  isSaving: boolean;
  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private certificationService: CertificationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ certification }) => {
      this.updateForm(certification);
    });
  }

  saveCertification(): void {
    this.isSaving = true;
    if (!this.manageCertificationsForm.get(['id']).value) {
      this.certificationService.createCertification(this.manageCertificationsForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Academic Certification created', 'Success');
          this.router.navigate(['/maangecertifications']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new Certification', 'Error');
        });
    } else {
      this.certificationService.updateCertification(this.manageCertificationsForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Certification successfully updated', 'Success');
          this.router.navigate(['/maangecertifications']);
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
    this.manageCertificationsForm = new FormGroup({
      id: new FormControl(''),
      certName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      issuingOrg: new FormControl('', [Validators.required]),
      issuingDate: new FormControl('', [Validators.required]),
      expireDate: new FormControl('', [Validators.required]),
      certCode: new FormControl('', [Validators.required]),
      certUrl: new FormControl('', [Validators.required]),
      expires: new FormControl(false, [Validators.required]),
      formRecaptcha: new FormControl(null, [Validators.required]),
    });
  }

  private updateForm(certification: Certification): void {
    this.manageCertificationsForm.patchValue({
      id: certification.id,
      certName: certification.certName,
      issuingOrg: certification.issuingOrg,
      expires: !certification.expires ? false : certification.expires,
      issuingDate: certification.issuingDate,
      expireDate: certification.expireDate,
      certCode: certification.certCode,
      certUrl: certification.certUrl,
    });
  }

}
