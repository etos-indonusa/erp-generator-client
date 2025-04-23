import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPurPoFormSchema } from 'de-sdk-core/lib/form-schema/amims-pur-po.form-schema';
import type { AmimsPurPoDto } from 'de-sdk-core/lib/models';
import { PurPoService } from 'de-sdk-core/lib/services';

import { CurrencyService } from 'de-sdk-core/lib/services';
import { PositionService } from 'de-sdk-core/lib/services';
import { PurVendorService } from 'de-sdk-core/lib/services';
import { PurVendorContactService } from 'de-sdk-core/lib/services';
import { SiteService } from 'de-sdk-core/lib/services';
import { UsersService } from 'de-sdk-core/lib/services'; 

@Component({
    selector: 'app-pur-po-share-add',
    templateUrl: './pur-po-share-add.component.html',
    styleUrl: './pur-po-share-add.component.scss'
})
export class PurPoShareAddComponent {
    @Input('purPo') purPo: AmimsPurPoDto = {
        idPurPo: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.purPo && this.purPo.idPurPo) {
            this.form?.patchValue(this.purPo);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private purPoService: PurPoService,
        private currencyService: CurrencyService,
        private positionService: PositionService,
        private purVendorService: PurVendorService,
        private purVendorContactService: PurVendorContactService,
        private siteService: SiteService,
        private usersService: UsersService,  
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPurPoFormSchema, {
            kodePurPo: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'PurPo');

        this.getAllCurrency();
        this.getAllPosition();
        this.getAllPurVendor();
        this.getAllPurVendorContact();
        this.getAllSite();
        this.getAllUser();
        this.getAllUserDirector();
        this.getAllUserManager();
    }

    listCurrency: any[] = [];

    listPosition: any[] = [];

    listPurVendor: any[] = [];

    listPurVendorContact: any[] = [];

    listSite: any[] = [];

    listUser: any[] = [];

    listUserDirector: any[] = [];

    listUserManager: any[] = [];


    // untuk fungsi get ALL relation
    getAllCurrency() {
        this.currencyService.currencyControllerFindAll().subscribe(
            data => this.listCurrency = data.data ?? []
        );
    }
    getAllPosition() {
        this.positionService.positionControllerFindAll().subscribe(
            data => this.listPosition = data.data ?? []
        );
    }
    getAllPurVendor() {
        this.purVendorService.purVendorControllerFindAll().subscribe(
            data => this.listPurVendor = data.data ?? []
        );
    }
    getAllPurVendorContact() {
        this.purVendorContactService.purVendorContactControllerFindAll().subscribe(
            data => this.listPurVendorContact = data.data ?? []
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
    getAllUserDirector() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserDirector = data.data ?? []
        );
    }
    getAllUserManager() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserManager = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsPurPoFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.purPo.idPurPo ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.purPoService.purPoControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purPo berhasil disimpan.');
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
        this.purPoService.purPoControllerUpdate({ id: this.purPo.idPurPo, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purPo berhasil diperbarui.');
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
