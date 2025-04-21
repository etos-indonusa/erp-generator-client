import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMpcWpFormSchema } from 'src/sdk/core/form-schema/amims-mpc-wp.form-schema';
import type { AmimsMpcWpDto } from 'src/sdk/core/models';
import { MpcWpService, UsersService } from 'src/sdk/core/services';

import { AircraftService } from 'src/sdk/core/services';

@Component({
    selector: 'app-mpc-wp-share-add',
    templateUrl: './mpc-wp-share-add.component.html',
    styleUrl: './mpc-wp-share-add.component.scss'
})
export class MpcWpShareAddComponent {
    @Input('mpcWp') mpcWp: AmimsMpcWpDto = {
        idMpcWp: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.mpcWp && this.mpcWp.idMpcWp) {
            this.form?.patchValue(this.mpcWp);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private mpcWpService: MpcWpService,
        private aircraftService: AircraftService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMpcWpFormSchema, {
            kodeMpcWp: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'MpcWp');

        this.getAllAircraft();
        this.getAllUserMm();
        this.getAllUserMpc();
    }

    listAircraft: any[] = [];

    listUserMm: any[] = [];

    listUserMpc: any[] = [];


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllUserMm() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserMm = data.data ?? []
        );
    }
    getAllUserMpc() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserMpc = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsMpcWpFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.mpcWp.idMpcWp ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.mpcWpService.mpcWpControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpcWp berhasil disimpan.');
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
        this.mpcWpService.mpcWpControllerUpdate({ id: this.mpcWp.idMpcWp, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpcWp berhasil diperbarui.');
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
