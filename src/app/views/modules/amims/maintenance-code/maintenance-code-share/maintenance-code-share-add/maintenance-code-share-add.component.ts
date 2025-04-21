import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMaintenanceCodeFormSchema } from 'src/sdk/core/form-schema/amims-maintenance-code.form-schema'; 
import type { AmimsMaintenanceCodeDto } from 'src/sdk/core/models';
import { MaintenanceCodeService } from 'src/sdk/core/services';

 
@Component({
    selector: 'app-maintenance-code-share-add',
    templateUrl: './maintenance-code-share-add.component.html',
    styleUrl: './maintenance-code-share-add.component.scss'
})
export class MaintenanceCodeShareAddComponent {
    @Input('maintenanceCode') maintenanceCode: AmimsMaintenanceCodeDto = {
  idMaintenanceCode: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.maintenanceCode && this.maintenanceCode.idMaintenanceCode) {
        this.form?.patchValue(this.maintenanceCode);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private maintenanceCodeService: MaintenanceCodeService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMaintenanceCodeFormSchema, {
            // kodeMaintenanceCode: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'MaintenanceCode');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsMaintenanceCodeFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.maintenanceCode.idMaintenanceCode ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.maintenanceCodeService.maintenanceCodeControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceCode berhasil disimpan.');
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
        this.maintenanceCodeService.maintenanceCodeControllerUpdate({ id: this.maintenanceCode.idMaintenanceCode, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceCode berhasil diperbarui.');
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
