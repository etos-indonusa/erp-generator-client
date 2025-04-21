import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsCompanyFormSchema } from 'src/sdk/core/form-schema/amims-company.form-schema'; 
import type { AmimsCompanyDto } from 'src/sdk/core/models';
import { CompanyService } from 'src/sdk/core/services';

 
@Component({
    selector: 'app-company-share-add',
    templateUrl: './company-share-add.component.html',
    styleUrl: './company-share-add.component.scss'
})
export class CompanyShareAddComponent {
    @Input('company') company: AmimsCompanyDto = {
  idCompany: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.company && this.company.idCompany) {
        this.form?.patchValue(this.company);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private companyService: CompanyService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsCompanyFormSchema, {
            // kodeCompany: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'Company');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsCompanyFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.company.idCompany ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.companyService.companyControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data company berhasil disimpan.');
                this.nzDrawerRef.close(data);
            },
            error: () => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat menyimpan.');
            },
            complete: () => (this.is_loading = false)
        });
    }

    update() {
        this.is_loading = true;
        this.companyService.companyControllerUpdate({ id: this.company.idCompany, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data company berhasil diperbarui.');
                this.nzDrawerRef.close(data);
            },
            error: () => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat memperbarui.');
            },
            complete: () => (this.is_loading = false)
        });
    }

    goToBack(data = null) {
        this.nzDrawerRef.close(data);
    }
}
