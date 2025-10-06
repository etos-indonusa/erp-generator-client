import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMaintenanceProgramFormSchema, MaintenanceService } from 'de-sdk-core';
import type { AmimsMaintenanceProgramDto } from 'de-sdk-core';
import { MaintenanceProgramService } from 'de-sdk-core';

import { ActypeService } from 'de-sdk-core';
import { AircraftService } from 'de-sdk-core';
import { MaintenanceCodeService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'app-maintenance-program-share-add',
    templateUrl: './maintenance-program-share-add.component.html',
    styleUrl: './maintenance-program-share-add.component.scss'
})
export class MaintenanceProgramShareAddComponent {
    @Input('maintenanceProgram') maintenanceProgram: AmimsMaintenanceProgramDto = {
        idMaintenanceProgram: ''
    };
    @Input('idAircraft') idAircraft: string | null = null;
    @Input('idActype') idActype: string | null = null;
    form!: FormGroup;
    private saveSubject = new Subject<void>();

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.maintenanceProgram && this.maintenanceProgram.idMaintenanceProgram) {
            this.form?.patchValue(this.maintenanceProgram);
        }
    }
    constructor(
        private cd: ChangeDetectorRef,
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private maintenanceProgramService: MaintenanceProgramService,
        private actypeService: ActypeService,
        private aircraftService: AircraftService,
        private maintenanceCodeService: MaintenanceCodeService,
        private maintenanceService: MaintenanceService,
        private mpartService: MpartService,
    ) {
        this.saveSubject.pipe(debounceTime(500)).subscribe(() => {
            this.autoUpdate();
        });
    }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMaintenanceProgramFormSchema, {
            // kodeMaintenanceProgram: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
            idMpart: [Validators.required],
            idActype: [Validators.required],
            idMaintenanceCode: [Validators.required],
        }, 'MaintenanceProgram');

        this.getAllActype();
        // this.getAllAircraft();
        this.getAllMaintenanceCode();

        if (this.maintenanceProgram.idMaintenanceProgram) {
            this.form?.patchValue(this.maintenanceProgram);
        } else {
            if (this.idAircraft) {
                this.form?.patchValue({ idAircraft: this.idAircraft });
            }
            if (this.idActype) {
                this.form?.patchValue({ idActype: this.idActype });
            }
            this.form.patchValue({ validasi: 0 })
            this.simpan();
        }

        this.form.get('idActype')?.valueChanges.subscribe(value => {
            if (value) {
                this.getAllAircraft()
            } else {
                this.listAircraft = [];
            }
        });
    }

    listActype: any[] = [];

    listAircraft: any[] = [];

    listMaintenanceCode: any[] = [];

    listMpart: any[] = [];

    listUser: any[] = [];


    // untuk fungsi get ALL relation
    getAllActype() {
        this.actypeService.actypeControllerFindAll().subscribe(
            data => this.listActype = data.data ?? []
        );
    }
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll({
            filter: JSON.stringify(
                this.form.get('idActype')?.value ? { idActype: this.form.get('idActype')?.value } : {}
            )
        }).subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllMaintenanceCode() {
        this.maintenanceCodeService.maintenanceCodeControllerFindAll().subscribe(
            data => this.listMaintenanceCode = data.data ?? []
        );
    }


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


    submit(): void {
        const labelMap = extractLabels(AmimsMaintenanceProgramFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.maintenanceProgram.idMaintenanceProgram ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.form.patchValue({
            validasi: 0,
        });
        this.maintenanceProgramService.maintenanceProgramControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                if (data.data) {
                    this.form.patchValue(data.data);
                }
                this.maintenanceProgram = data.data!;
                this.cd.detectChanges()
            },
            error: (e) => {

            },
            complete: () => (this.is_loading = false)
        });
    }
    autoUpdate() {

        this.maintenanceProgramService.maintenanceProgramControllerUpdate({ id: this.maintenanceProgram.idMaintenanceProgram, body: this.form.value }).subscribe({
            next: (data) => {

            },
            error: (e) => {

            },
            complete: () => (this.is_loading = false)
        });
    }
    autoSave(): void {
        this.saveSubject.next();
    }

    update() {
        this.is_loading = true;
        this.form.patchValue({
            validasi: 1,
        });
        this.maintenanceProgramService.maintenanceProgramControllerUpdate({ id: this.maintenanceProgram.idMaintenanceProgram, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data maintenanceProgram berhasil diperbarui.');
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
