import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsLibReferenceFormSchema } from 'de-sdk-core';
import type { AmimsLibReferenceDto } from 'de-sdk-core';
import { LibReferenceService } from 'de-sdk-core';


@Component({
    selector: 'app-lib-reference-share-add',
    templateUrl: './lib-reference-share-add.component.html',
    styleUrl: './lib-reference-share-add.component.scss'
})
export class LibReferenceShareAddComponent {
    @Input('libReference') libReference: AmimsLibReferenceDto = {
        idLibReference: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.libReference && this.libReference.idLibReference) {
            this.form?.patchValue(this.libReference);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private libReferenceService: LibReferenceService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsLibReferenceFormSchema, {
            // kodeLibReference: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        }, 'LibReference');
        this.form?.patchValue(this.libReference);
    }


    // untuk fungsi get ALL relation

    submit(): void {
        const labelMap = extractLabels(AmimsLibReferenceFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.libReference.idLibReference ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.libReferenceService.libReferenceControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data libReference berhasil disimpan.');
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
        this.libReferenceService.libReferenceControllerUpdate({ id: this.libReference.idLibReference, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data libReference berhasil diperbarui.');
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
