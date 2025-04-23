import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsDoctypeFormSchema } from 'de-sdk-core/lib/form-schema/amims-doctype.form-schema'; 
import type { AmimsDoctypeDto } from 'de-sdk-core/lib/models';
import { DoctypeService } from 'de-sdk-core/lib/services';

 
@Component({
    selector: 'app-doctype-share-add',
    templateUrl: './doctype-share-add.component.html',
    styleUrl: './doctype-share-add.component.scss'
})
export class DoctypeShareAddComponent {
    @Input('doctype') doctype: AmimsDoctypeDto = {
  idDoctype: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.doctype && this.doctype.idDoctype) {
        this.form?.patchValue(this.doctype);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private doctypeService: DoctypeService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsDoctypeFormSchema, {
            // kodeDoctype: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'Doctype');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsDoctypeFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.doctype.idDoctype ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.doctypeService.doctypeControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data doctype berhasil disimpan.');
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
        this.doctypeService.doctypeControllerUpdate({ id: this.doctype.idDoctype, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data doctype berhasil diperbarui.');
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
