import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsTechLogFormSchema } from 'de-sdk-core/lib/form-schema/amims-tech-log.form-schema';
import type { AmimsTechLogDto } from 'de-sdk-core/lib/models';
import { TechLogService, UsersService } from 'de-sdk-core/lib/services';

import { AircraftService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-tech-log-share-add',
    templateUrl: './tech-log-share-add.component.html',
    styleUrl: './tech-log-share-add.component.scss'
})
export class TechLogShareAddComponent {
    @Input('techLog') techLog: AmimsTechLogDto = {
        idTechLog: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.techLog && this.techLog.idTechLog) {
            this.form?.patchValue(this.techLog);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private techLogService: TechLogService,
        private aircraftService: AircraftService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsTechLogFormSchema, {
            kodeTechLog: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'TechLog');

        this.getAllAircraft();
        this.getAllUserAcc();
        this.getAllUserInspection();
        this.getAllUserLog();
    }

    listAircraft: any[] = [];

    listUserAcc: any[] = [];

    listUserInspection: any[] = [];

    listUserLog: any[] = [];


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllUserAcc() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserAcc = data.data ?? []
        );
    }
    getAllUserInspection() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserInspection = data.data ?? []
        );
    }
    getAllUserLog() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserLog = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsTechLogFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.techLog.idTechLog ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.techLogService.techLogControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techLog berhasil disimpan.');
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
        this.techLogService.techLogControllerUpdate({ id: this.techLog.idTechLog, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techLog berhasil diperbarui.');
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
