import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsUnscheduleMaintenanceFormSchema, PartInstallReportService, PartInstallService, TechLogService } from 'de-sdk-core';
import type { AmimsUnscheduleMaintenanceDto } from 'de-sdk-core';
import { UnscheduleMaintenanceService } from 'de-sdk-core';

import { AircraftService } from 'de-sdk-core';

@Component({
    selector: 'app-unschedule-maintenance-share-add',
    templateUrl: './unschedule-maintenance-share-add.component.html',
    styleUrl: './unschedule-maintenance-share-add.component.scss'
})
export class UnscheduleMaintenanceShareAddComponent {
    @Input('idAircraft') idAircraft: string | null = null;
    @Input('idTechLog') idTechLog: string | null = null;
    @Input('unscheduleMaintenance') unscheduleMaintenance: AmimsUnscheduleMaintenanceDto = {
        idUnscheduleMaintenance: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.unscheduleMaintenance && this.unscheduleMaintenance.idUnscheduleMaintenance) {
            this.form?.patchValue(this.unscheduleMaintenance);
        }
    }
    constructor(
        private cd: ChangeDetectorRef,
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private unscheduleMaintenanceService: UnscheduleMaintenanceService,
        private aircraftService: AircraftService,
        private techLogService: TechLogService,
        private partInstallService: PartInstallReportService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsUnscheduleMaintenanceFormSchema, {
            // kodeUnscheduleMaintenance: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        }, 'UnscheduleMaintenance');

        this.getAllAircraft();

        this.form.get('idAircraft')?.valueChanges.subscribe(value => {
            this.getAllTechLog();
            this.getAllPart();

            const selectedAircraft = this.listAircraft.find(item => item.idAircraft === value);
            console.log('selectedAircraft', selectedAircraft);
            if (selectedAircraft && selectedAircraft.serialNumber) {
                this.form.get('airframeSn')?.setValue(selectedAircraft.serialNumber);
            } else {
                this.form.get('airframeSn')?.setValue(null);
            }
        });
        this.form.get('idTechLog')?.valueChanges.subscribe(value => {
            const selectedTechLog = this.listTechLog.find(item => item.idTechLog === value);
            if (selectedTechLog && selectedTechLog.numberLog) {
                this.form.get('amlNumber')?.setValue(selectedTechLog.numberLog);
                this.form.get('reportedHours')?.setValue(selectedTechLog.hoursCf);
                this.form.get('reportedLandings')?.setValue(selectedTechLog.cycleCf);

            } else {
                this.form.get('amlNumber')?.setValue(null);
            }
        });

        if (this.unscheduleMaintenance) {
            this.form.patchValue(this.unscheduleMaintenance);
        }
        else {
            if (this.idAircraft) {
                this.form.get('idAircraft')?.patchValue(this.idAircraft);
            }
            if (this.idTechLog) {
                this.form.get('idTechLog')?.patchValue(this.idTechLog);
            }
        }
    }

    listAircraft: any[] = [];
    listTechLog: any[] = [];
    listPart: any[] = [];

    listUser: any[] = [];


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllPart() {
        this.partInstallService.partInstallReportControllerFindAll({
            body: {
                filter: {
                    idAircraft: this.form.get('idAircraft')?.value,
                    parent: "0"
                },
                include: [
                    {
                        "name": "part",
                        "type": "single"
                    }
                ],
            }
        }).subscribe(
            data => {
                this.listPart = data.data ?? [];
            }
        );
    }

    getAllTechLog() {
        this.techLogService.techLogControllerFindAll(
            {
                filter: JSON.stringify({
                    idAircraft: this.form.get('idAircraft')?.value
                }),
                pageSize: 10,
                sortKey: 'createdAt',
                sortValue: 'desc'
            }
        ).subscribe(
            data => this.listTechLog = data.data ?? []
        );
    }


    submit(): void {
        const labelMap = extractLabels(AmimsUnscheduleMaintenanceFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.unscheduleMaintenance.idUnscheduleMaintenance ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.unscheduleMaintenanceService.unscheduleMaintenanceControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data unscheduleMaintenance berhasil disimpan.');
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
        this.unscheduleMaintenanceService.unscheduleMaintenanceControllerUpdate({ id: this.unscheduleMaintenance.idUnscheduleMaintenance, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data unscheduleMaintenance berhasil diperbarui.');
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
