import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsLibFormIssuedFormSchema } from 'de-sdk-core'; 
import type { AmimsLibFormIssuedDto } from 'de-sdk-core';
import { LibFormIssuedService } from 'de-sdk-core';

 
@Component({
    selector: 'app-lib-form-issued-share-add',
    templateUrl: './lib-form-issued-share-add.component.html',
    styleUrl: './lib-form-issued-share-add.component.scss'
})
export class LibFormIssuedShareAddComponent {
    @Input('libFormIssued') libFormIssued: AmimsLibFormIssuedDto = {
  idLibFormIssued: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.libFormIssued && this.libFormIssued.idLibFormIssued) {
        this.form?.patchValue(this.libFormIssued);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private libFormIssuedService: LibFormIssuedService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsLibFormIssuedFormSchema, {
            // kodeLibFormIssued: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'LibFormIssued');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsLibFormIssuedFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.libFormIssued.idLibFormIssued ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.libFormIssuedService.libFormIssuedControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data libFormIssued berhasil disimpan.');
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
        this.libFormIssuedService.libFormIssuedControllerUpdate({ id: this.libFormIssued.idLibFormIssued, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data libFormIssued berhasil diperbarui.');
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
