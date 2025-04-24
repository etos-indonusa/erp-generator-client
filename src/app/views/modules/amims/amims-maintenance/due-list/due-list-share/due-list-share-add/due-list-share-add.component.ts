import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsDueListFormSchema } from 'de-sdk-core';
import type { AmimsDueListDto } from 'de-sdk-core';
import { DueListService } from 'de-sdk-core';

import { AircraftService } from 'de-sdk-core';
import { MaintenanceService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { TypeOfworkService } from 'de-sdk-core';

@Component({
    selector: 'app-due-list-share-add',
    templateUrl: './due-list-share-add.component.html',
    styleUrl: './due-list-share-add.component.scss'
})
export class DueListShareAddComponent {
    @Input('dueList') dueList: AmimsDueListDto = {
        idDueList: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.dueList && this.dueList.idDueList) {
            this.form?.patchValue(this.dueList);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private dueListService: DueListService,
        private aircraftService: AircraftService,
        private mantenanceService: MaintenanceService,
        private partService: PartService,
        private typeOfworkService: TypeOfworkService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsDueListFormSchema, {
            kodeDueList: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'DueList');

        this.getAllAircraft();
        this.getAllMantenance();
        this.getAllPart();
        this.getAllTypeOfwork();
    }

    listAircraft: any[] = [];

    listMantenance: any[] = [];

    listPart: any[] = [];

    listTypeOfwork: any[] = [];


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllMantenance() {
        this.mantenanceService.maintenanceControllerFindAll().subscribe(
            data => this.listMantenance = data.data ?? []
        );
    }
    getAllPart() {
        this.partService.partControllerFindAll().subscribe(
            data => this.listPart = data.data ?? []
        );
    }
    getAllTypeOfwork() {
        this.typeOfworkService.typeOfworkControllerFindAll().subscribe(
            data => this.listTypeOfwork = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsDueListFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.dueList.idDueList ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.dueListService.dueListControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data dueList berhasil disimpan.');
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
        this.dueListService.dueListControllerUpdate({ id: this.dueList.idDueList, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data dueList berhasil diperbarui.');
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
