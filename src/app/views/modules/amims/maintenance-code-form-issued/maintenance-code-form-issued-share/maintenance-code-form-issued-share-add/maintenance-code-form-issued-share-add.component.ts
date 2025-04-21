import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMaintenanceCodeFormIssuedFormSchema } from 'src/sdk/core/form-schema/amims-maintenance-code-form-issued.form-schema'; 
import type { AmimsMaintenanceCodeFormIssuedDto } from 'src/sdk/core/models';
import { MaintenanceCodeFormIssuedService } from 'src/sdk/core/services';

import { LibFormIssuedService } from 'src/sdk/core/services';
import { MaintenanceCodeService } from 'src/sdk/core/services';
 
@Component({
    selector: 'app-maintenance-code-form-issued-share-add',
    templateUrl: './maintenance-code-form-issued-share-add.component.html',
    styleUrl: './maintenance-code-form-issued-share-add.component.scss'
})
export class MaintenanceCodeFormIssuedShareAddComponent {
    @Input('maintenanceCodeFormIssued') maintenanceCodeFormIssued: AmimsMaintenanceCodeFormIssuedDto = {
  idMaintenanceCodeFormIssued: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.maintenanceCodeFormIssued && this.maintenanceCodeFormIssued.idMaintenanceCodeFormIssued) {
        this.form?.patchValue(this.maintenanceCodeFormIssued);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private maintenanceCodeFormIssuedService: MaintenanceCodeFormIssuedService,
                        private libFormIssuedService: LibFormIssuedService,
                private maintenanceCodeService: MaintenanceCodeService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMaintenanceCodeFormIssuedFormSchema, {
            // kodeMaintenanceCodeFormIssued: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'MaintenanceCodeFormIssued');

                            this.getAllLibFormIssued();
                    this.getAllMaintenanceCode();
                    }
    
    listLibFormIssued: any[] = [];
    
    listMaintenanceCode: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllLibFormIssued() {
    this.libFormIssuedService.libFormIssuedControllerFindAll().subscribe(
      data => this.listLibFormIssued = data.data ?? []
    );
  }
        getAllMaintenanceCode() {
    this.maintenanceCodeService.maintenanceCodeControllerFindAll().subscribe(
      data => this.listMaintenanceCode = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsMaintenanceCodeFormIssuedFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.maintenanceCodeFormIssued.idMaintenanceCodeFormIssued ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.maintenanceCodeFormIssuedService.maintenanceCodeFormIssuedControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceCodeFormIssued berhasil disimpan.');
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
        this.maintenanceCodeFormIssuedService.maintenanceCodeFormIssuedControllerUpdate({ id: this.maintenanceCodeFormIssued.idMaintenanceCodeFormIssued, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceCodeFormIssued berhasil diperbarui.');
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
