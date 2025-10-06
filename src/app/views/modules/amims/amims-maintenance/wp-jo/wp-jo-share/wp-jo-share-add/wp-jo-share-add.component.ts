import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsWpJoFormSchema } from 'de-sdk-core';
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

@Component({
    selector: 'app-wp-jo-share-add',
    templateUrl: './wp-jo-share-add.component.html',
    styleUrl: './wp-jo-share-add.component.scss'
})
export class WpJoShareAddComponent {
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
        private maintenanceService: MaintenanceService,
        private maintenanceCodeService: MaintenanceCodeService,
        private maintenanceProgramService: MaintenanceProgramService,
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
            
            this.form.controls['statusWpJo'].setValue('draft');

            console.log(this.form.value);
        }
    }

    listAircraft: any[] = [];

    listDueListOutput: any[] = [];

    listMaintenance: any[] = [];

    listMaintenanceCode: any[] = [];

    listMaintenanceProgram: any[] = [];

    listMpart: any[] = [];

    listPart: any[] = [];

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

    getAllSite() {
        this.siteService.siteControllerFindAll().subscribe(
            data => this.listSite = data.data ?? []
        );
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
