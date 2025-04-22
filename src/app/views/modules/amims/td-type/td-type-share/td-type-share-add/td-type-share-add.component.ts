import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsTdTypeFormSchema } from 'de-sdk-core/form-schema/amims-td-type.form-schema'; 
import type  { AmimsTdTypeDto } from 'de-sdk-core/models';
import { TdTypeService } from 'de-sdk-core/services';


@Component({
    selector: 'app-td-type-share-add',
    templateUrl: './td-type-share-add.component.html',
    styleUrl: './td-type-share-add.component.scss'
})
export class TdTypeShareAddComponent {
    @Input('tdType') tdType: AmimsTdTypeDto = {
  idTdType: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.tdType && this.tdType.idTdType) {
        this.form?.patchValue(this.tdType);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private tdTypeService: TdTypeService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsTdTypeFormSchema, {
            kodeTdType: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'TdType');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsTdTypeFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.tdType.idTdType ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.tdTypeService.tdTypeControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data tdType berhasil disimpan.');
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
        this.tdTypeService.tdTypeControllerUpdate({ id: this.tdType.idTdType, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data tdType berhasil diperbarui.');
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
