import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsQaRpdDispotitionFormSchema } from 'de-sdk-core/lib/form-schema/amims-qa-rpd-dispotition.form-schema'; 
import type  { AmimsQaRpdDispotitionDto } from 'de-sdk-core/lib/models';
import { QaRpdDispotitionService } from 'de-sdk-core/lib/services';


@Component({
    selector: 'app-qa-rpd-dispotition-share-add',
    templateUrl: './qa-rpd-dispotition-share-add.component.html',
    styleUrl: './qa-rpd-dispotition-share-add.component.scss'
})
export class QaRpdDispotitionShareAddComponent {
    @Input('qaRpdDispotition') qaRpdDispotition: AmimsQaRpdDispotitionDto = {
  idQaRpdDispotition: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.qaRpdDispotition && this.qaRpdDispotition.idQaRpdDispotition) {
        this.form?.patchValue(this.qaRpdDispotition);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private qaRpdDispotitionService: QaRpdDispotitionService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsQaRpdDispotitionFormSchema, {
            kodeQaRpdDispotition: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'QaRpdDispotition');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsQaRpdDispotitionFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.qaRpdDispotition.idQaRpdDispotition ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.qaRpdDispotitionService.qaRpdDispotitionControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data qaRpdDispotition berhasil disimpan.');
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
        this.qaRpdDispotitionService.qaRpdDispotitionControllerUpdate({ id: this.qaRpdDispotition.idQaRpdDispotition, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data qaRpdDispotition berhasil diperbarui.');
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
