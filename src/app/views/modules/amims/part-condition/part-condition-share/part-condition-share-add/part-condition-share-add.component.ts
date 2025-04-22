import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPartConditionFormSchema } from 'de-sdk-core/form-schema/amims-part-condition.form-schema'; 
import type  { AmimsPartConditionDto } from 'de-sdk-core/models';
import { PartConditionService } from 'de-sdk-core/services';


@Component({
    selector: 'app-part-condition-share-add',
    templateUrl: './part-condition-share-add.component.html',
    styleUrl: './part-condition-share-add.component.scss'
})
export class PartConditionShareAddComponent {
    @Input('partCondition') partCondition: AmimsPartConditionDto = {
  idPartCondition: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.partCondition && this.partCondition.idPartCondition) {
        this.form?.patchValue(this.partCondition);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private partConditionService: PartConditionService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPartConditionFormSchema, {
            kodePartCondition: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PartCondition');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsPartConditionFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.partCondition.idPartCondition ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.partConditionService.partConditionControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partCondition berhasil disimpan.');
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
        this.partConditionService.partConditionControllerUpdate({ id: this.partCondition.idPartCondition, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partCondition berhasil diperbarui.');
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
