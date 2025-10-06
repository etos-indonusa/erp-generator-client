import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMaintenanceProgramDocumentFormSchema } from 'de-sdk-core';
import type { AmimsMaintenanceProgramDocumentDto } from 'de-sdk-core';
import { MaintenanceProgramDocumentService } from 'de-sdk-core';

import { MaintenanceDocumentService } from 'de-sdk-core';
import { MaintenanceProgramService } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-program-document-share-add',
    templateUrl: './maintenance-program-document-share-add.component.html',
    styleUrl: './maintenance-program-document-share-add.component.scss'
})
export class MaintenanceProgramDocumentShareAddComponent {
    @Input('maintenanceProgramDocument') maintenanceProgramDocument: AmimsMaintenanceProgramDocumentDto = {
        idMaintenanceDocument: '',
        idMaintenanceProgram: '',
        idMaintenanceProgramDocument: ''
    };
    @Input('idMaintenanceProgram') idMaintenanceProgram: string = '';
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.maintenanceProgramDocument && this.maintenanceProgramDocument.idMaintenanceProgramDocument) {
            this.form?.patchValue(this.maintenanceProgramDocument);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private maintenanceProgramDocumentService: MaintenanceProgramDocumentService,
        private maintenanceDocumentService: MaintenanceDocumentService,
        private maintenanceProgramService: MaintenanceProgramService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMaintenanceProgramDocumentFormSchema, {
            // kodeMaintenanceProgramDocument: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        }, 'MaintenanceProgramDocument');

        if(this.maintenanceProgramDocument && this.maintenanceProgramDocument.idMaintenanceProgramDocument) {
            this.form?.patchValue(this.maintenanceProgramDocument);
        } else {
            // untuk default value
            this.form.patchValue({
                idMaintenanceProgram: this.idMaintenanceProgram,
                idMaintenanceDocument: 'x'
            });
        }

        // this.getAllMaintenanceDocument(); 
    }

    listMaintenanceDocument: any[] = [];

    listMaintenanceProgram: any[] = [];


    // untuk fungsi get ALL relation
    // getAllMaintenanceDocument() {
    //     this.maintenanceDocumentService.maintenanceDocumentControllerFindAll().subscribe(
    //         data => this.listMaintenanceDocument = data.data ?? []
    //     );
    // }
    getAllMaintenanceProgram() {
        this.maintenanceProgramService.maintenanceProgramControllerFindAll().subscribe(
            data => this.listMaintenanceProgram = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsMaintenanceProgramDocumentFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.maintenanceProgramDocument.idMaintenanceProgramDocument ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.maintenanceProgramDocumentService.maintenanceProgramDocumentControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceProgramDocument berhasil disimpan.');
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
        this.maintenanceProgramDocumentService.maintenanceProgramDocumentControllerUpdate({ id: this.maintenanceProgramDocument.idMaintenanceProgramDocument, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceProgramDocument berhasil diperbarui.');
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
