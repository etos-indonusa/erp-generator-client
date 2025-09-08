import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMaintenanceMaterialFormSchema } from 'de-sdk-core';
import type { AmimsMaintenanceMaterialDto } from 'de-sdk-core';
import { MaintenanceMaterialService } from 'de-sdk-core';

import { MaintenanceService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-material-share-add',
    templateUrl: './maintenance-material-share-add.component.html',
    styleUrl: './maintenance-material-share-add.component.scss'
})
export class MaintenanceMaterialShareAddComponent {
    @Input('maintenanceMaterial') maintenanceMaterial: AmimsMaintenanceMaterialDto = {
        idMaintenanceMaterial: ''
    };
    @Input('idMaintenance') idMaintenance: string = ''
    @Input('itemType') itemType: string = ''
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.maintenanceMaterial && this.maintenanceMaterial.idMaintenanceMaterial) {
            this.form?.patchValue(this.maintenanceMaterial);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private maintenanceMaterialService: MaintenanceMaterialService,
        private maintenanceService: MaintenanceService,
        private mpartService: MpartService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMaintenanceMaterialFormSchema, {
            // kodeMaintenanceMaterial: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        }, 'MaintenanceMaterial');

        this.getAllMaintenance();
        this.getAllMpart();
        if(this.maintenanceMaterial.idMaintenanceMaterial){
            this.form.patchValue(this.maintenanceMaterial);
        } else {
            this.form.patchValue({ idMaintenance: this.idMaintenance, itemType: this.itemType });
        }
        this.form.get('idMpart')?.valueChanges.subscribe((idMpart) => {
            const selected = this.listMpart.find(item => item.idMpart === idMpart);
            if (selected) {
                this.form.patchValue({
                    partNumber: selected.partNumber || '',
                    itemName: selected.keyword || '',
                    unit: selected.unit || ''
                });
            } else {
                this.form.patchValue({
                    partNumber: '',
                    itemName: '',
                    unit: ''
                });
            }
        });
    }

    listMaintenance: any[] = [];

    listMpart: any[] = [];


    // untuk fungsi get ALL relation
    getAllMaintenance() {
        this.maintenanceService.maintenanceControllerFindAll().subscribe(
            data => this.listMaintenance = data.data ?? []
        );
    }
    getAllMpart() {
        this.mpartService.mpartControllerFindAll().subscribe(
            data => this.listMpart = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsMaintenanceMaterialFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.maintenanceMaterial.idMaintenanceMaterial ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.maintenanceMaterialService.maintenanceMaterialControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceMaterial berhasil disimpan.');
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
        this.maintenanceMaterialService.maintenanceMaterialControllerUpdate({ id: this.maintenanceMaterial.idMaintenanceMaterial, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceMaterial berhasil diperbarui.');
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
