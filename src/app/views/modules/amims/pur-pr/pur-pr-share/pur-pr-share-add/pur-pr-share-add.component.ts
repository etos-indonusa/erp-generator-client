import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPurPrFormSchema } from 'de-sdk-core/form-schema/amims-pur-pr.form-schema';
import type { AmimsPurPrDto } from 'de-sdk-core/models';
import { PurPrService } from 'de-sdk-core/services';

import { AircraftService } from 'de-sdk-core/services';
import { PositionService } from 'de-sdk-core/services';
import { SiteService } from 'de-sdk-core/services';
import { UsersService } from 'de-sdk-core/services'; 

@Component({
    selector: 'app-pur-pr-share-add',
    templateUrl: './pur-pr-share-add.component.html',
    styleUrl: './pur-pr-share-add.component.scss'
})
export class PurPrShareAddComponent {
    @Input('purPr') purPr: AmimsPurPrDto = {
        idPurPr: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.purPr && this.purPr.idPurPr) {
            this.form?.patchValue(this.purPr);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private purPrService: PurPrService,
        private aircraftService: AircraftService,
        private positionService: PositionService,
        private siteService: SiteService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPurPrFormSchema, {
            kodePurPr: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'PurPr');

        this.getAllAircraft();
        this.getAllPosition();
        this.getAllSite();
        this.getAllUser();
        this.getAllUserAcc();
    }

    listAircraft: any[] = [];

    listPosition: any[] = [];

    listSite: any[] = [];

    listUser: any[] = [];

    listUserAcc: any[] = [];


    // untuk fungsi get ALL relation
    getAllAircraft() {
        this.aircraftService.aircraftControllerFindAll().subscribe(
            data => this.listAircraft = data.data ?? []
        );
    }
    getAllPosition() {
        this.positionService.positionControllerFindAll().subscribe(
            data => this.listPosition = data.data ?? []
        );
    }
    getAllSite() {
        this.siteService.siteControllerFindAll().subscribe(
            data => this.listSite = data.data ?? []
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
        const labelMap = extractLabels(AmimsPurPrFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.purPr.idPurPr ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.purPrService.purPrControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purPr berhasil disimpan.');
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
        this.purPrService.purPrControllerUpdate({ id: this.purPr.idPurPr, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purPr berhasil diperbarui.');
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
