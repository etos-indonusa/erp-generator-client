import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPartFormSchema } from 'de-sdk-core';
import type { AmimsPartDto } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';

import { ConditionMonitoringService } from 'de-sdk-core';
import { CurrencyService } from 'de-sdk-core';
import { LifeTimeLimitService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';
import { PartConditionService } from 'de-sdk-core';
import { PurGrnService } from 'de-sdk-core';
import { PurPoItemService } from 'de-sdk-core';
import { PurPrclService } from 'de-sdk-core';
import { PurVendorService } from 'de-sdk-core';
import { SiteService } from 'de-sdk-core';
import { TypeOfworkService } from 'de-sdk-core';
import { WarrantyService } from 'de-sdk-core';

@Component({
    selector: 'app-part-share-add',
    templateUrl: './part-share-add.component.html',
    styleUrl: './part-share-add.component.scss'
})
export class PartShareAddComponent {
    @Input('part') part: AmimsPartDto = {
        idPart: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.part && this.part.idPart) {
            this.form?.patchValue(this.part);
        }
    }
    constructor(
        private cd: ChangeDetectorRef,
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private partService: PartService,
        private conditionMonitoringService: ConditionMonitoringService,
        private currencyService: CurrencyService,
        private lifeTimeLimitService: LifeTimeLimitService,
        private mpartService: MpartService,
        private partConditionService: PartConditionService,
        private purGrnService: PurGrnService,
        private purPoItemService: PurPoItemService,
        private purPrclService: PurPrclService,
        private purVendorService: PurVendorService,
        private siteService: SiteService,
        private typeOfworkService: TypeOfworkService,
        private warrantyService: WarrantyService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPartFormSchema, {
            kodePart: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'Part');

        this.getAllConditionMonitoring();
        this.getAllCurrency();
        this.getAllLifeTimeLimit();
        this.getAllMpart();
        this.getAllPartCondition();
        this.getAllPurGrn();
        this.getAllPurPoItem();
        this.getAllPurPrcl();
        this.getAllPurVendor();
        this.getAllSite();
        this.getAllTypeOfwork(); 
        this.getAllWarranty();
    }

    listConditionMonitoring: any[] = [];

    listCurrency: any[] = [];

    listLifeTimeLimit: any[] = [];

    listMpart: any[] = [];

    listPartCondition: any[] = [];

    listPurGrn: any[] = [];

    listPurPoItem: any[] = [];

    listPurPrcl: any[] = [];

    listPurVendor: any[] = [];

    listSite: any[] = [];

    listTypeOfwork: any[] = [];

    listUser: any[] = [];

    listWarranty: any[] = [];


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
    getAllPurPoItem() {
        this.purPoItemService.purPoItemControllerFindAll().subscribe(
            data => this.listPurPoItem = data.data ?? []
        );
    }
    getAllPurPrcl() {
        this.purPrclService.purPrclControllerFindAll().subscribe(
            data => this.listPurPrcl = data.data ?? []
        );
    }
    getAllPurVendor() {
        this.purVendorService.purVendorControllerFindAll().subscribe(
            data => this.listPurVendor = data.data ?? []
        );
    }
    getAllSite() {
        this.siteService.siteControllerFindAll().subscribe(
            data => this.listSite = data.data ?? []
        );
    }
    getAllTypeOfwork() {
        this.typeOfworkService.typeOfworkControllerFindAll().subscribe(
            data => this.listTypeOfwork = data.data ?? []
        );
    }

    getAllWarranty() {
        this.warrantyService.warrantyControllerFindAll().subscribe(
            data => this.listWarranty = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsPartFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.part.idPart ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.partService.partControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data part berhasil disimpan.');
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
        this.partService.partControllerUpdate({ id: this.part.idPart, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data part berhasil diperbarui.');
                this.nzDrawerRef.close(data);
                this.cd.detectChanges()
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
