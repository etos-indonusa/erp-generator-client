import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPurPrclFormSchema } from 'src/sdk/core/form-schema/amims-pur-prcl.form-schema';
import type { AmimsPurPrclDto } from 'src/sdk/core/models';
import { PurPrclService, UsersService } from 'src/sdk/core/services';

import { ConditionMonitoringService } from 'src/sdk/core/services';
import { CurrencyService } from 'src/sdk/core/services';
import { InternalGrnItemService } from 'src/sdk/core/services';
import { LifeTimeLimitService } from 'src/sdk/core/services';
import { MpartService } from 'src/sdk/core/services';
import { PartService } from 'src/sdk/core/services';
import { PartConditionService } from 'src/sdk/core/services';
import { PurGrnService } from 'src/sdk/core/services';
import { PurGrnItemService } from 'src/sdk/core/services';
import { PurVendorService } from 'src/sdk/core/services';

@Component({
    selector: 'app-pur-prcl-share-add',
    templateUrl: './pur-prcl-share-add.component.html',
    styleUrl: './pur-prcl-share-add.component.scss'
})
export class PurPrclShareAddComponent {
    @Input('purPrcl') purPrcl: AmimsPurPrclDto = {
        idPurPrcl: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.purPrcl && this.purPrcl.idPurPrcl) {
            this.form?.patchValue(this.purPrcl);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private purPrclService: PurPrclService,
        private conditionMonitoringService: ConditionMonitoringService,
        private currencyService: CurrencyService,
        private internalGrnItemService: InternalGrnItemService,
        private lifeTimeLimitService: LifeTimeLimitService,
        private mpartService: MpartService,
        private partService: PartService,
        private partConditionService: PartConditionService,
        private purGrnService: PurGrnService,
        private purGrnItemService: PurGrnItemService,
        private purVendorService: PurVendorService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPurPrclFormSchema, {
            kodePurPrcl: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'PurPrcl');

        this.getAllConditionMonitoring();
        this.getAllCurrency();
        this.getAllInternalGrnItem();
        this.getAllLifeTimeLimit();
        this.getAllMpart();
        this.getAllPart();
        this.getAllPartCondition();
        this.getAllPurGrn();
        this.getAllPurGrnItem();
        this.getAllPurVendor();
        this.getAllUserPu();
        this.getAllUserQa();
    }

    listConditionMonitoring: any[] = [];

    listCurrency: any[] = [];

    listInternalGrnItem: any[] = [];

    listLifeTimeLimit: any[] = [];

    listMpart: any[] = [];

    listPart: any[] = [];

    listPartCondition: any[] = [];

    listPurGrn: any[] = [];

    listPurGrnItem: any[] = [];

    listPurVendor: any[] = [];

    listUserPu: any[] = [];

    listUserQa: any[] = [];


    // untuk fungsi get ALL relation
    getAllConditionMonitoring() {
        this.conditionMonitoringService.conditionMonitoringControllerFindAll().subscribe(
            data => this.listConditionMonitoring = data.data ?? []
        );
    }
    getAllCurrency() {
        this.currencyService.currencyControllerFindAll().subscribe(
            data => this.listCurrency = data.data ?? []
        );
    }
    getAllInternalGrnItem() {
        this.internalGrnItemService.internalGrnItemControllerFindAll().subscribe(
            data => this.listInternalGrnItem = data.data ?? []
        );
    }
    getAllLifeTimeLimit() {
        this.lifeTimeLimitService.lifeTimeLimitControllerFindAll().subscribe(
            data => this.listLifeTimeLimit = data.data ?? []
        );
    }
    getAllMpart() {
        this.mpartService.mpartControllerFindAll().subscribe(
            data => this.listMpart = data.data ?? []
        );
    }
    getAllPart() {
        this.partService.partControllerFindAll().subscribe(
            data => this.listPart = data.data ?? []
        );
    }
    getAllPartCondition() {
        this.partConditionService.partConditionControllerFindAll().subscribe(
            data => this.listPartCondition = data.data ?? []
        );
    }
    getAllPurGrn() {
        this.purGrnService.purGrnControllerFindAll().subscribe(
            data => this.listPurGrn = data.data ?? []
        );
    }
    getAllPurGrnItem() {
        this.purGrnItemService.purGrnItemControllerFindAll().subscribe(
            data => this.listPurGrnItem = data.data ?? []
        );
    }
    getAllPurVendor() {
        this.purVendorService.purVendorControllerFindAll().subscribe(
            data => this.listPurVendor = data.data ?? []
        );
    }
    getAllUserPu() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserPu = data.data ?? []
        );
    }
    getAllUserQa() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserQa = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsPurPrclFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.purPrcl.idPurPrcl ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.purPrclService.purPrclControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purPrcl berhasil disimpan.');
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
        this.purPrclService.purPrclControllerUpdate({ id: this.purPrcl.idPurPrcl, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purPrcl berhasil diperbarui.');
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
