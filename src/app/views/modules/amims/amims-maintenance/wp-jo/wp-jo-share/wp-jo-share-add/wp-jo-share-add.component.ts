import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsWpJoFormSchema, LastMaintenanceService, MaintenanceReportService } from 'de-sdk-core';
import type { AmimsWpJoDto } from 'de-sdk-core';
import { WpJoService } from 'de-sdk-core';

import { AircraftService } from 'de-sdk-core';
import { DueListOutputService } from 'de-sdk-core';
import { MaintenanceService } from 'de-sdk-core';
import { MaintenanceCodeService } from 'de-sdk-core';
import { MaintenanceProgramService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { SiteService } from 'de-sdk-core';
import { TechLogService } from 'de-sdk-core';
import { WpService } from 'de-sdk-core';
import { PartInstallService } from 'de-sdk-core';

@Component({
    selector: 'app-wp-jo-share-add',
    templateUrl: './wp-jo-share-add.component.html',
    styleUrl: './wp-jo-share-add.component.scss'
})
export class WpJoShareAddComponent {
    @Input('idUnscheduleMaintenance') idUnscheduleMaintenance: string | null = null;
    @Input('idWpJo') idWpJo: string | null = null;
    @Input('idAircraft') idAircraft: string | null = null;
    @Input('idDueListOutput') idDueListOutput: string | null = null;
    @Input('idMaintenance') idMaintenance: string | null = null;
    @Input('idMaintenanceCode') idMaintenanceCode: string | null = null;
    @Input('idMaintenanceProgram') idMaintenanceProgram: string | null = null;
    @Input('idMpart') idMpart: string | null = null;
    @Input('idPart') idPart: string | null = null;
    @Input('idSite') idSite: string | null = null;
    @Input('idTechLog') idTechLog: string | null = null;
    @Input('idUser') idUser: string | null = null;
    @Input('idWp') idWp: string | null = null;
    @Input('typeOfwork') typeOfwork: string | null = null;
    @Input('workDue') workDue: string | null = null;

    @Input('hourseTo') hourseTo: any | null = null;
    @Input('cycleTo') cycleTo: any | null = null;
    @Input('timeRangeTo') timeRangeTo: any | null = null;
    @Input('timeVariable') timeVariable: any | null = null;

    @Input('wpJo') wpJo: AmimsWpJoDto = {
        idWpJo: ''
    };

    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.wpJo && this.wpJo.idWpJo) {
            this.form?.patchValue(this.wpJo);
        }
    }
    constructor(
        private cd: ChangeDetectorRef,
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private wpJoService: WpJoService,
        private aircraftService: AircraftService,
        private dueListOutputService: DueListOutputService,
        private maintenanceService: MaintenanceReportService,
        private maintenanceCodeService: MaintenanceCodeService,
        private partInstallService: PartInstallService,
        private maintenanceProgramService: MaintenanceProgramService,
        private lastMaintenanceService: LastMaintenanceService,
        private mpartService: MpartService,
        private partService: PartService,
        private siteService: SiteService,
        private techLogService: TechLogService,
        private wpService: WpService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsWpJoFormSchema, {
            idPart: [Validators.required],
            idAircraft: [Validators.required],
            idMaintenanceCode: [Validators.required],
            idMpart: [Validators.required],
        }, 'WpJo');

        this.getAllAircraft();
        this.getAllMaintenanceCode();
        this.getAllSite();

        if (this.wpJo && this.wpJo.idWpJo) {
            this.form.patchValue(this.wpJo);
        } else {
            if (this.idAircraft) this.form.controls['idAircraft'].setValue(this.idAircraft);
            if (this.idDueListOutput) this.form.controls['idDueListOutput'].setValue(this.idDueListOutput);
            if (this.idMaintenance) this.form.controls['idMaintenance'].setValue(this.idMaintenance);
            if (this.idMaintenanceCode) this.form.controls['idMaintenanceCode'].setValue(this.idMaintenanceCode);
            if (this.idMaintenanceProgram) this.form.controls['idMaintenanceProgram'].setValue(this.idMaintenanceProgram);
            if (this.idMpart) this.form.controls['idMpart'].setValue(this.idMpart);
            if (this.idPart) this.form.controls['idPart'].setValue(this.idPart);
            if (this.idSite) this.form.controls['idSite'].setValue(this.idSite);
            if (this.idTechLog) this.form.controls['idTechLog'].setValue(this.idTechLog);
            if (this.idUser) this.form.controls['idUser'].setValue(this.idUser);
            if (this.idWp) this.form.controls['idWp'].setValue(this.idWp);
            if (this.typeOfwork) this.form.controls['typeOfwork'].setValue(this.typeOfwork);
            if (this.workDue) this.form.controls['workDue'].setValue(this.workDue);
            if (this.timeVariable) this.form.controls['timeVariable'].setValue(this.timeVariable);
            if (this.hourseTo) this.form.controls['hourseTo'].setValue(this.hourseTo);
            if (this.cycleTo) this.form.controls['cycleTo'].setValue(this.cycleTo);
            if (this.timeRangeTo) this.form.controls['timeRangeTo'].setValue(this.timeRangeTo);
            if (this.idUnscheduleMaintenance) this.form.controls['idUnscheduleMaintenance'].setValue(this.idUnscheduleMaintenance);

            this.form.controls['statusWpJo'].setValue('draft');

            console.log(this.form.value);
        }

        this.form.controls['idAircraft'].valueChanges.subscribe(() => {
            this.form.controls['idMpart'].setValue(null, { emitEvent: false });
            this.form.controls['idPart'].setValue(null, { emitEvent: false });
            this.listPart = [];
            this.listMaintenance = [];
        });

        this.form.controls['idPart'].valueChanges.subscribe(() => {
            this.applySelectedPartEffects();
        });

        this.form.controls['idMaintenance'].valueChanges.subscribe(() => {
            this.applySelectedMaintenance();
        });

        if (this.form.controls['idPart'].value) {
            this.loadSelectedPart(this.form.controls['idPart'].value);
        }

    }

    listAircraft: any[] = [];

    listDueListOutput: any[] = [];

    listMaintenance: any[] = [];

    listMaintenanceCode: any[] = [];

    listMaintenanceProgram: any[] = [];

    listMpart: any[] = [];

    listPart: any[] = [];

    partSearchLoading = false;

    listSite: any[] = [];

    listTechLog: any[] = [];

    listUser: any[] = [];

    listWp: any[] = [];




    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllMaintenanceCode() {
        this.maintenanceCodeService.maintenanceCodeControllerFindAll().subscribe(
            data => this.listMaintenanceCode = data.data ?? []
        );
    }
    getAllMaintenance(ensureSelected = false) {
        const idMpart = this.form.controls['idMpart'].value;
        if (!idMpart) {
            this.listMaintenance = [];
            this.form.controls['idMaintenance'].setValue(null, { emitEvent: false });
            this.form.controls['idMaintenanceCode'].setValue(null, { emitEvent: false });
            return;
        }

        this.maintenanceService.maintenanceReportControllerFindAll({
            body: {
                filter: { idMpart },
                include: [
                    {
                        name: 'maintenance_code',
                        type: 'single'
                    }
                ]
            }
        }).subscribe(({ data }) => {
            this.listMaintenance = data ?? [];
            if (ensureSelected || this.form.controls['idMaintenance'].value) {
                this.applySelectedMaintenance(true);
            }
        });
    }

    getAllSite() {
        this.siteService.siteControllerFindAll().subscribe(
            data => this.listSite = data.data ?? []
        );
    }

    getPartInstall(search_keyword: string | null = null, ensureSelected = false) {
        const idAircraft = this.form.controls['idAircraft'].value;
        if (!idAircraft) {
            this.partSearchLoading = false;
            return;
        }

        const filter: Record<string, any> = {
            idAircraft,
            statusInstall: 'y'
        };


        if (ensureSelected && this.form.controls['idPart'].value) {
            filter.idPart = this.form.controls['idPart'].value;
        }

        this.partInstallService.partInstallControllerFindAll({
            filter: JSON.stringify(filter),
            pageSize: 50,
            search_field: ['partNumber', 'keyword', 'sn'],
            search_keyword: search_keyword ?? undefined
        }).subscribe({
            next: data => {
                this.listPart = data.data ?? [];
                if (ensureSelected) {
                    this.applySelectedPartEffects(true);
                }
            },
            error: () => {
                this.listPart = [];
                this.partSearchLoading = false;
            },
            complete: () => this.partSearchLoading = false
        });
    }

    getLastMaintenance() {
        const idMaintenanceCode = this.form.controls['idMaintenanceCode'].value;
        const idPart = this.form.controls['idPart'].value;

        if (!idMaintenanceCode || !idPart) {
            return;
        }

        this.lastMaintenanceService.lastMaintenanceControllerFindAll({
            filter: JSON.stringify({
                idMaintenance : idMaintenanceCode,
                idPart
            }),
            sortValue: 'desc',
            sortKey: 'createdAt' 
            
        }).subscribe(({ data }) => {
            if (data && data.length > 0) {
                const lastMaint = data[0];
                this.form.controls['hourseFrom'].setValue(lastMaint.lastHours ?? null, { emitEvent: false });
                this.form.controls['cycleFrom'].setValue(lastMaint.lastCycle ?? null, { emitEvent: false });
                this.form.controls['timeRangeFrom'].setValue(lastMaint.lastDate ?? 0, { emitEvent: false });
            } else {
                this.form.controls['hourseFrom'].setValue(null, { emitEvent: false });
                this.form.controls['cycleFrom'].setValue(null, { emitEvent: false });
                this.form.controls['timeRangeFrom'].setValue(null, { emitEvent: false });
            }
        });
    }


    onPartSearch(term: string) {
        const keyword = term?.trim();
        if (!keyword || keyword.length < 3) {
            this.listPart = [];
            this.partSearchLoading = false;
            return;
        }
        this.partSearchLoading = true;
        this.getPartInstall(keyword);
    }

    onPartOpen(open: boolean) {
        if (!open) {
            return;
        }

        if (this.listPart.length === 0 && this.form.controls['idPart'].value) {
            this.partSearchLoading = true;
            this.getPartInstall(null, true);
        }
    }

    private loadSelectedPart(idPart: string) {
        if (!idPart) {
            return;
        }
        this.partSearchLoading = true;
        this.getPartInstall(null, true);
    }

    private applySelectedPartEffects(skipLoad = false) {
        const idPart = this.form.controls['idPart'].value;

        if (!idPart) {
            this.form.controls['idMpart'].setValue(null, { emitEvent: false });
            this.form.controls['idMaintenance'].setValue(null, { emitEvent: false });
            this.form.controls['idMaintenanceCode'].setValue(null, { emitEvent: false });
            this.listMaintenance = [];
            return;
        }

        const selected = this.listPart.find(item => item.idPart === idPart);
        if (!selected) {
            if (!skipLoad) {
                this.loadSelectedPart(idPart);
            }
            return;
        }

        if (selected.idMpart && this.form.controls['idMpart'].value !== selected.idMpart) {
            this.form.controls['idMpart'].setValue(selected.idMpart, { emitEvent: false });
        }

        this.getAllMaintenance(true);
    }

    private applySelectedMaintenance(skipReload = false) {
        const idMaintenance = this.form.controls['idMaintenance'].value;

        if (!idMaintenance) {
            this.form.controls['idMaintenanceCode'].setValue(null, { emitEvent: false });
            this.form.controls['hourseFrom'].setValue(null, { emitEvent: false });
            this.form.controls['cycleFrom'].setValue(null, { emitEvent: false });
            this.form.controls['timeRangeFrom'].setValue(null, { emitEvent: false });
            this.form.controls['hourseTo'].setValue(null, { emitEvent: false });
            this.form.controls['cycleTo'].setValue(null, { emitEvent: false });
            this.form.controls['timeRangeTo'].setValue(null, { emitEvent: false });
            this.form.controls['timeVariable'].setValue(null, { emitEvent: false });
            return;
        }

        const selected = this.listMaintenance.find(item => item.idMaintenance === idMaintenance);
        if (selected) {
            const mappedCode = selected.idMaintenanceCode
                ?? selected.maintenance_code?.idMaintenanceCode
                ?? selected.maintenanceCode?.idMaintenanceCode
                ?? selected.maintenance_code?.idMaintenanceCode;
            console.log("mappedCode", mappedCode);
            if (mappedCode && this.form.controls['idMaintenanceCode'].value !== mappedCode) {
                this.form.controls['idMaintenanceCode'].setValue(mappedCode, { emitEvent: false });
            }

            this.applyMaintenanceRanges(selected);
            this.getLastMaintenance();
            return;
        }

        if (!skipReload) {
            this.getAllMaintenance(true);
        }
    }

    private applyMaintenanceRanges(selected: any) {
        if (!selected) {
            return;
        }

        this.form.controls['hourseTo'].setValue(selected.hourseTo ?? selected.hoursTo ?? null, { emitEvent: false });
        this.form.controls['cycleTo'].setValue(selected.flightHoursTo ?? selected.cycleTo ?? null, { emitEvent: false });
        this.form.controls['timeRangeTo'].setValue(selected.timeRangeTo ?? null, { emitEvent: false });
        this.form.controls['timeVariable'].setValue(selected.timeUnit ?? null, { emitEvent: false });
        this.form.controls['workDue'].setValue(selected.maintenanceCode?.descriptionMaintenance ?? null, { emitEvent: false });
    }




    submit(): void {
        const labelMap = extractLabels(AmimsWpJoFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.wpJo.idWpJo ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.wpJoService.wpJoControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data wpJo berhasil disimpan.');
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
        this.wpJoService.wpJoControllerUpdate({ id: this.wpJo.idWpJo, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data wpJo berhasil diperbarui.');
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
