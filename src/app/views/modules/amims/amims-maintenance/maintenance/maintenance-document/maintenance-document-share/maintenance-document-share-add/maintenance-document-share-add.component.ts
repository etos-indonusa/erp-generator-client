import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMaintenanceDocumentFormSchema } from 'de-sdk-core';
import type { AmimsMaintenanceDocumentDto } from 'de-sdk-core';
import { MaintenanceDocumentService } from 'de-sdk-core';

import { MaintenanceService } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-document-share-add',
    templateUrl: './maintenance-document-share-add.component.html',
    styleUrl: './maintenance-document-share-add.component.scss'
})
export class MaintenanceDocumentShareAddComponent {
    @Input('maintenanceDocument') maintenanceDocument: AmimsMaintenanceDocumentDto = {
        idMaintenanceDocument: ''
    }
    @Input('idMaintenance') idMaintenance: string =  ''
    @Input('documentType') documentType: string =  ''
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.maintenanceDocument && this.maintenanceDocument.idMaintenanceDocument) {
            this.form?.patchValue(this.maintenanceDocument);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private maintenanceDocumentService: MaintenanceDocumentService,
        private maintenanceService: MaintenanceService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMaintenanceDocumentFormSchema, {
            // kodeMaintenanceDocument: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        }, 'MaintenanceDocument');

        this.getAllMaintenance();

        if(!this.maintenanceDocument.idMaintenanceDocument){
            this.form.patchValue({idMaintenance: this.idMaintenance, documentType: this.documentType});
        }else{
            this.form.patchValue(this.maintenanceDocument);
        }
    }

    listMaintenance: any[] = [];


    // untuk fungsi get ALL relation
    getAllMaintenance() {
        this.maintenanceService.maintenanceControllerFindAll().subscribe(
            data => this.listMaintenance = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsMaintenanceDocumentFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.maintenanceDocument.idMaintenanceDocument ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.maintenanceDocumentService.maintenanceDocumentControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceDocument berhasil disimpan.');
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
        this.maintenanceDocumentService.maintenanceDocumentControllerUpdate({ id: this.maintenanceDocument.idMaintenanceDocument, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceDocument berhasil diperbarui.');
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
