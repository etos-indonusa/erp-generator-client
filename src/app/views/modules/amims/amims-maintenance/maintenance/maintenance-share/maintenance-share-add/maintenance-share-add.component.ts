import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMaintenanceFormSchema } from 'de-sdk-core';
import type { AmimsMaintenanceDto } from 'de-sdk-core';
import { MaintenanceService } from 'de-sdk-core';

import { MaintenanceCodeService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-share-add',
    templateUrl: './maintenance-share-add.component.html',
    styleUrl: './maintenance-share-add.component.scss'
})
export class MaintenanceShareAddComponent {
    @Input('idMpart') idMpart: string = ''
    @Input('ata') ata: string = ''
    @Input('maintenance') maintenance: AmimsMaintenanceDto = {
        idMaintenance: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.maintenance && this.maintenance.idMaintenance) {
            this.form?.patchValue(this.maintenance);
        }
    }
    constructor(
        private cd: ChangeDetectorRef,
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private maintenanceService: MaintenanceService,
        private maintenanceCodeService: MaintenanceCodeService,
        private mpartService: MpartService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMaintenanceFormSchema, {
            kodeMaintenance: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'Maintenance');

        this.getAllMaintenanceCode();
        this.getAllMpart();
        if (this.maintenance.idMaintenance) {
            this.form.patchValue(this.maintenance);
        }
        else if (this.idMpart) {
            this.form.patchValue({ idMpart: this.idMpart });
            if (this.ata) {
                this.form.patchValue({ atachapter: this.ata });
            }
        }

    }

    listMaintenanceCode: any[] = [];

    listMpart: any[] = [];

    listUser: any[] = [];


    // untuk fungsi get ALL relation
    getAllMaintenanceCode() {
        this.maintenanceCodeService.maintenanceCodeControllerFindAll().subscribe(
            data => this.listMaintenanceCode = data.data ?? []
        );
    }
    getAllMpart() {
        this.mpartService.mpartControllerFindAll().subscribe(
            data => this.listMpart = data.data ?? []
        );
    }


    submit(): void {
        const labelMap = extractLabels(AmimsMaintenanceFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.maintenance.idMaintenance ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.maintenanceService.maintenanceControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenance berhasil disimpan.');
                this.nzDrawerRef.close(data);
            },
            error: (e) => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat menyimpan.' + e?.error?.error);
            },
            complete: () => (this.is_loading = false)
        });
    }

    update() {
        this.is_loading = true;
        this.maintenanceService.maintenanceControllerUpdate({ id: this.maintenance.idMaintenance, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenance berhasil diperbarui.');
                this.nzDrawerRef.close(data);
                this.cd.detectChanges()
            },
            error: (e) => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat menyimpan.' + e?.error?.error);
            },
            complete: () => (this.is_loading = false)
        });
    }

    goToBack(data = null) {
        this.nzDrawerRef.close(data);
    }
}
