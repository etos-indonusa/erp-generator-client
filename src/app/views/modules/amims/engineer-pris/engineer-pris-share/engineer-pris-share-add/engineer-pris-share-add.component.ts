import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsEngineerPrisFormSchema } from 'de-sdk-core/form-schema/amims-engineer-pris.form-schema';
import type { AmimsEngineerPrisDto } from 'de-sdk-core/models';
import { EngineerPrisService } from 'de-sdk-core/services';

import { AircraftService } from 'de-sdk-core/services';
import { PositionService } from 'de-sdk-core/services';
import { SiteService } from 'de-sdk-core/services';
import { UsersService } from 'de-sdk-core/services'; 

@Component({
    selector: 'app-engineer-pris-share-add',
    templateUrl: './engineer-pris-share-add.component.html',
    styleUrl: './engineer-pris-share-add.component.scss'
})
export class EngineerPrisShareAddComponent {
    @Input('engineerPris') engineerPris: AmimsEngineerPrisDto = {
        idEngineerPris: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.engineerPris && this.engineerPris.idEngineerPris) {
            this.form?.patchValue(this.engineerPris);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private engineerPrisService: EngineerPrisService,
        private aircraftService: AircraftService,
        private positionService: PositionService,
        private siteService: SiteService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsEngineerPrisFormSchema, {
            kodeEngineerPris: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'EngineerPris');

        this.getAllAircraft();
        this.getAllPosition();
        this.getAllSite();
        this.getAllUser();
        this.getAllUserAcc();
        this.getAllUserClose();
        this.getAllUserIssued();
    }

    listAircraft: any[] = [];

    listPosition: any[] = [];

    listSite: any[] = [];

    listUser: any[] = [];

    listUserAcc: any[] = [];

    listUserClose: any[] = [];

    listUserIssued: any[] = [];


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
    getAllUserClose() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserClose = data.data ?? []
        );
    }
    getAllUserIssued() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserIssued = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsEngineerPrisFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.engineerPris.idEngineerPris ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.engineerPrisService.engineerPrisControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerPris berhasil disimpan.');
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
        this.engineerPrisService.engineerPrisControllerUpdate({ id: this.engineerPris.idEngineerPris, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerPris berhasil diperbarui.');
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
