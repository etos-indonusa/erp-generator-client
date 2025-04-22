import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMaintenanceCodeReferenceFormSchema } from 'de-sdk-core/form-schema/amims-maintenance-code-reference.form-schema'; 
import type { AmimsMaintenanceCodeReferenceDto } from 'de-sdk-core/models';
import { MaintenanceCodeReferenceService } from 'de-sdk-core/services';

import { LibReferenceService } from 'de-sdk-core/services';
import { MaintenanceCodeService } from 'de-sdk-core/services';
 
@Component({
    selector: 'app-maintenance-code-reference-share-add',
    templateUrl: './maintenance-code-reference-share-add.component.html',
    styleUrl: './maintenance-code-reference-share-add.component.scss'
})
export class MaintenanceCodeReferenceShareAddComponent {
    @Input('maintenanceCodeReference') maintenanceCodeReference: AmimsMaintenanceCodeReferenceDto = {
  idMaintenanceCodeReference: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.maintenanceCodeReference && this.maintenanceCodeReference.idMaintenanceCodeReference) {
        this.form?.patchValue(this.maintenanceCodeReference);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private maintenanceCodeReferenceService: MaintenanceCodeReferenceService,
                        private libReferenceService: LibReferenceService,
                private maintenanceCodeService: MaintenanceCodeService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMaintenanceCodeReferenceFormSchema, {
            // kodeMaintenanceCodeReference: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'MaintenanceCodeReference');

                            this.getAllLibReference();
                    this.getAllMaintenanceCode();
                    }
    
    listLibReference: any[] = [];
    
    listMaintenanceCode: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllLibReference() {
    this.libReferenceService.libReferenceControllerFindAll().subscribe(
      data => this.listLibReference = data.data ?? []
    );
  }
        getAllMaintenanceCode() {
    this.maintenanceCodeService.maintenanceCodeControllerFindAll().subscribe(
      data => this.listMaintenanceCode = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsMaintenanceCodeReferenceFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.maintenanceCodeReference.idMaintenanceCodeReference ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.maintenanceCodeReferenceService.maintenanceCodeReferenceControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceCodeReference berhasil disimpan.');
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
        this.maintenanceCodeReferenceService.maintenanceCodeReferenceControllerUpdate({ id: this.maintenanceCodeReference.idMaintenanceCodeReference, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceCodeReference berhasil diperbarui.');
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
