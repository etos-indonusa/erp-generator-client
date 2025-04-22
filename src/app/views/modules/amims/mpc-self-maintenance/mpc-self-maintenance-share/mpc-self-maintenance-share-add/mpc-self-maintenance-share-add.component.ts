import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMpcSelfMaintenanceFormSchema } from 'de-sdk-core/form-schema/amims-mpc-self-maintenance.form-schema';
import type { AmimsMpcSelfMaintenanceDto } from 'de-sdk-core/models';
import { MpcSelfMaintenanceService, UsersService } from 'de-sdk-core/services';

import { EngineerRtiService } from 'de-sdk-core/services';
import { SiteService } from 'de-sdk-core/services';

@Component({
    selector: 'app-mpc-self-maintenance-share-add',
    templateUrl: './mpc-self-maintenance-share-add.component.html',
    styleUrl: './mpc-self-maintenance-share-add.component.scss'
})
export class MpcSelfMaintenanceShareAddComponent {
    @Input('mpcSelfMaintenance') mpcSelfMaintenance: AmimsMpcSelfMaintenanceDto = {
        idMpcSelfMaintenance: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.mpcSelfMaintenance && this.mpcSelfMaintenance.idMpcSelfMaintenance) {
            this.form?.patchValue(this.mpcSelfMaintenance);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private mpcSelfMaintenanceService: MpcSelfMaintenanceService,
        private engineerRtiService: EngineerRtiService,
        private siteService: SiteService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMpcSelfMaintenanceFormSchema, {
            kodeMpcSelfMaintenance: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'MpcSelfMaintenance');

        this.getAllEngineerRti();
        this.getAllSite();
        this.getAllUserMaintenance();
        this.getAllUserQa();
    }

    listEngineerRti: any[] = [];

    listSite: any[] = [];

    listUserMaintenance: any[] = [];

    listUserQa: any[] = [];


    // untuk fungsi get ALL relation
    getAllEngineerRti() {
        this.engineerRtiService.engineerRtiControllerFindAll().subscribe(
            data => this.listEngineerRti = data.data ?? []
        );
    }
    getAllSite() {
        this.siteService.siteControllerFindAll().subscribe(
            data => this.listSite = data.data ?? []
        );
    }
    getAllUserMaintenance() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserMaintenance = data.data ?? []
        );
    }
    getAllUserQa() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserQa = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsMpcSelfMaintenanceFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.mpcSelfMaintenance.idMpcSelfMaintenance ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.mpcSelfMaintenanceService.mpcSelfMaintenanceControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpcSelfMaintenance berhasil disimpan.');
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
        this.mpcSelfMaintenanceService.mpcSelfMaintenanceControllerUpdate({ id: this.mpcSelfMaintenance.idMpcSelfMaintenance, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpcSelfMaintenance berhasil diperbarui.');
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
