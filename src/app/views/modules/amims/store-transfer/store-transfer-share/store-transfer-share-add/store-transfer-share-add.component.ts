import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsStoreTransferFormSchema } from 'de-sdk-core/form-schema/amims-store-transfer.form-schema';
import type { AmimsStoreTransferDto } from 'de-sdk-core/models';
import { StoreTransferService, UsersService } from 'de-sdk-core/services';

import { EngineerPmtrService } from 'de-sdk-core/services';

@Component({
    selector: 'app-store-transfer-share-add',
    templateUrl: './store-transfer-share-add.component.html',
    styleUrl: './store-transfer-share-add.component.scss'
})
export class StoreTransferShareAddComponent {
    @Input('storeTransfer') storeTransfer: AmimsStoreTransferDto = {
        idStoreTransfer: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.storeTransfer && this.storeTransfer.idStoreTransfer) {
            this.form?.patchValue(this.storeTransfer);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private storeTransferService: StoreTransferService,
        private engineerPmtrService: EngineerPmtrService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsStoreTransferFormSchema, {
            kodeStoreTransfer: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'StoreTransfer');

        this.getAllEngineerPmtr();
        this.getAllUserReceived();
        this.getAllUserTransfer();
    }

    listEngineerPmtr: any[] = [];

    listUserReceived: any[] = [];

    listUserTransfer: any[] = [];


    // untuk fungsi get ALL relation
    getAllEngineerPmtr() {
        this.engineerPmtrService.engineerPmtrControllerFindAll().subscribe(
            data => this.listEngineerPmtr = data.data ?? []
        );
    }
    getAllUserReceived() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserReceived = data.data ?? []
        );
    }
    getAllUserTransfer() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserTransfer = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsStoreTransferFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.storeTransfer.idStoreTransfer ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.storeTransferService.storeTransferControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data storeTransfer berhasil disimpan.');
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
        this.storeTransferService.storeTransferControllerUpdate({ id: this.storeTransfer.idStoreTransfer, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data storeTransfer berhasil diperbarui.');
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
