import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsEngineerPmtrFormSchema } from 'de-sdk-core/lib/form-schema/amims-engineer-pmtr.form-schema';
import type { AmimsEngineerPmtrDto } from 'de-sdk-core/lib/models';
import { EngineerPmtrService } from 'de-sdk-core/lib/services';

import { AircraftService } from 'de-sdk-core/lib/services';
import { UsersService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-engineer-pmtr-share-add',
    templateUrl: './engineer-pmtr-share-add.component.html',
    styleUrl: './engineer-pmtr-share-add.component.scss'
})
export class EngineerPmtrShareAddComponent {
    @Input('engineerPmtr') engineerPmtr: AmimsEngineerPmtrDto = {
        idEngineerPmtr: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.engineerPmtr && this.engineerPmtr.idEngineerPmtr) {
            this.form?.patchValue(this.engineerPmtr);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private engineerPmtrService: EngineerPmtrService,
        private aircraftService: AircraftService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsEngineerPmtrFormSchema, {
            kodeEngineerPmtr: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'EngineerPmtr');

        this.getAllAircraft();
        this.getAllUser();
        this.getAllUserAcc();
    }

    listAircraft: any[] = [];

    listUser: any[] = [];

    listUserAcc: any[] = [];


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllUser() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUser = data.data ?? []
        );
    }
    getAllUserAcc() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserAcc = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsEngineerPmtrFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.engineerPmtr.idEngineerPmtr ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.engineerPmtrService.engineerPmtrControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerPmtr berhasil disimpan.');
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
        this.engineerPmtrService.engineerPmtrControllerUpdate({ id: this.engineerPmtr.idEngineerPmtr, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerPmtr berhasil diperbarui.');
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
