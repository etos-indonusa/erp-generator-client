import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMaintenanceProgramMaterialFormSchema } from 'de-sdk-core';
import type { AmimsMaintenanceProgramMaterialDto } from 'de-sdk-core';
import { MaintenanceProgramMaterialService } from 'de-sdk-core';

import { MaintenanceProgramService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-program-material-share-add',
    templateUrl: './maintenance-program-material-share-add.component.html',
    styleUrl: './maintenance-program-material-share-add.component.scss'
})
export class MaintenanceProgramMaterialShareAddComponent {
    @Input('maintenanceProgramMaterial') maintenanceProgramMaterial: AmimsMaintenanceProgramMaterialDto = {
        idMaintenanceProgram: '',
        idMaintenanceProgramMaterial: ''
    };
    @Input('idMaintenanceProgram') idMaintenanceProgram: string // replace dengan id+Nama
    @Input('itemType') itemType: string // replace dengan id+Nama
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.maintenanceProgramMaterial && this.maintenanceProgramMaterial.idMaintenanceProgramMaterial) {
            this.form?.patchValue(this.maintenanceProgramMaterial);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private maintenanceProgramMaterialService: MaintenanceProgramMaterialService,
        private maintenanceProgramService: MaintenanceProgramService,
        private mpartService: MpartService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMaintenanceProgramMaterialFormSchema, {
            // kodeMaintenanceProgramMaterial: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        }, 'MaintenanceProgramMaterial');

        // this.getAllMaintenanceProgram();
        // this.getAllMpart();
        if (this.maintenanceProgramMaterial && this.maintenanceProgramMaterial.idMaintenanceProgramMaterial) {
            this.form.patchValue(this.maintenanceProgramMaterial);
        } else {
            // untuk set default value
            this.form.patchValue({
                idMaintenanceProgram: this.idMaintenanceProgram,
                itemType: this.itemType
            });
        }

        // Listen for changes to idPart and auto-fill itemName, uni, partNumber
        this.form.get('idMpart')?.valueChanges.subscribe((idPart: string) => {
            if (!idPart) return;

            // Pastikan listMpart sudah terisi, jika belum, ambil data dulu
            if (this.listMpart.length === 0) {
                this.mpartService.mpartControllerFindAll().subscribe(data => {
                    this.listMpart = data.data ?? [];
                    this.autofillPartFields(idPart);
                });
            } else {
                this.autofillPartFields(idPart);
            }
        });
    }

    autofillPartFields(idPart: string) {
        const selectedPart = this.listMpart.find(part => part.idMpart === idPart);
        if (selectedPart) {
            this.form.patchValue({
                itemName: selectedPart.keyword || '',
                unit: selectedPart.unit || '',
                partNumber: selectedPart.partNumber || ''
            });
        }
    }


    listMaintenanceProgram: any[] = [];

    listMpart: any[] = [];

    filteredMpart: { label: string; value: string }[] = [];
    isLoadingMpart = false;

    onSearchMpart(keyword: string): void {
        if (!keyword || keyword.length < 3) {
            this.filteredMpart = [];
            return;
        }

        this.isLoadingMpart = true;
        this.mpartService.mpartControllerFindAll({
            search_field: ['partNumber', 'keyword'],
            search_keyword: keyword,
            pageSize: 20,
        })
            .subscribe({
                next: (res) => {
                    this.filteredMpart = Array.isArray(res.data)
                        ? res.data.map((item: any) => ({
                            label: item.partNumber + ' - ' + item.keyword,
                            value: item.idMpart,
                        }))
                        : [];
                    this.isLoadingMpart = false;
                },
                error: () => {
                    this.isLoadingMpart = false;
                },
            });
    }


    // untuk fungsi get ALL relation
    getAllMaintenanceProgram() {
        this.maintenanceProgramService.maintenanceProgramControllerFindAll().subscribe(
            data => this.listMaintenanceProgram = data.data ?? []
        );
    }
    getAllMpart() {
        this.mpartService.mpartControllerFindAll().subscribe(
            data => this.listMpart = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsMaintenanceProgramMaterialFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.maintenanceProgramMaterial.idMaintenanceProgramMaterial ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.maintenanceProgramMaterialService.maintenanceProgramMaterialControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceProgramMaterial berhasil disimpan.');
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
        this.maintenanceProgramMaterialService.maintenanceProgramMaterialControllerUpdate({ id: this.maintenanceProgramMaterial.idMaintenanceProgramMaterial, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceProgramMaterial berhasil diperbarui.');
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
