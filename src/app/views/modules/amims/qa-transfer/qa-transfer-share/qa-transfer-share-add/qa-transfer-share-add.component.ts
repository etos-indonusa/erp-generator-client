import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsQaTransferFormSchema } from 'de-sdk-core/lib/form-schema/amims-qa-transfer.form-schema';
import type { AmimsQaTransferDto } from 'de-sdk-core/lib/models';
import { QaTransferService } from 'de-sdk-core/lib/services';

import { SiteService } from 'de-sdk-core/lib/services';
import { UsersService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-qa-transfer-share-add',
    templateUrl: './qa-transfer-share-add.component.html',
    styleUrl: './qa-transfer-share-add.component.scss'
})
export class QaTransferShareAddComponent {
    @Input('qaTransfer') qaTransfer: AmimsQaTransferDto = {
        idQaTransfer: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.qaTransfer && this.qaTransfer.idQaTransfer) {
            this.form?.patchValue(this.qaTransfer);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private qaTransferService: QaTransferService,
        private siteService: SiteService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsQaTransferFormSchema, {
            kodeQaTransfer: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'QaTransfer');

        this.getAllSite();
        this.getAllUser();
        this.getAllUserReceived();
    }

    listSite: any[] = [];

    listUser: any[] = [];

    listUserReceived: any[] = [];


    // untuk fungsi get ALL relation
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
    getAllUserReceived() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserReceived = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsQaTransferFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.qaTransfer.idQaTransfer ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.qaTransferService.qaTransferControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data qaTransfer berhasil disimpan.');
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
        this.qaTransferService.qaTransferControllerUpdate({ id: this.qaTransfer.idQaTransfer, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data qaTransfer berhasil diperbarui.');
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
