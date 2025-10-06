import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMaintenanceProgramTaskFormSchema } from 'de-sdk-core';
import type { AmimsMaintenanceProgramTaskDto } from 'de-sdk-core';
import { MaintenanceProgramTaskService } from 'de-sdk-core';

import { MaintenanceService } from 'de-sdk-core';
import { MaintenanceProgramService } from 'de-sdk-core';
import { main } from '@popperjs/core';

@Component({
    selector: 'app-maintenance-program-task-share-add',
    templateUrl: './maintenance-program-task-share-add.component.html',
    styleUrl: './maintenance-program-task-share-add.component.scss'
})
export class MaintenanceProgramTaskShareAddComponent {
    @Input('maintenanceProgramTask') maintenanceProgramTask: AmimsMaintenanceProgramTaskDto = {
        idMaintenanceProgram: '',
        idMaintenanceProgramTask: ''
    };
    @Input('idMaintenanceProgram') idMaintenanceProgram: string = '';
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.maintenanceProgramTask && this.maintenanceProgramTask.idMaintenanceProgramTask) {
            this.form?.patchValue(this.maintenanceProgramTask);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private maintenanceProgramTaskService: MaintenanceProgramTaskService,
        private maintenanceService: MaintenanceService,
        private maintenanceProgramService: MaintenanceProgramService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMaintenanceProgramTaskFormSchema, {
            // kodeMaintenanceProgramTask: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        }, 'MaintenanceProgramTask');

        this.getAllMaintenance();
        this.getAllMaintenanceProgram();
        if (this.maintenanceProgramTask && this.maintenanceProgramTask.idMaintenanceProgramTask) {
            this.form?.patchValue(this.maintenanceProgramTask);
        } else {
            // untuk default value
            this.form.patchValue({
                idMaintenanceProgram: this.idMaintenanceProgram
            });
        }
    }

    listMaintenance: any[] = [];

    listMaintenanceProgram: any[] = [];


    // untuk fungsi get ALL relation
    getAllMaintenance() {
        this.maintenanceService.maintenanceControllerFindAll().subscribe(
            data => this.listMaintenance = data.data ?? []
        );
    }
    getAllMaintenanceProgram() {
        this.maintenanceProgramService.maintenanceProgramControllerFindAll().subscribe(
            data => this.listMaintenanceProgram = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsMaintenanceProgramTaskFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.maintenanceProgramTask.idMaintenanceProgramTask ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.maintenanceProgramTaskService.maintenanceProgramTaskControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceProgramTask berhasil disimpan.');
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
        this.maintenanceProgramTaskService.maintenanceProgramTaskControllerUpdate({ id: this.maintenanceProgramTask.idMaintenanceProgramTask, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceProgramTask berhasil diperbarui.');
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
