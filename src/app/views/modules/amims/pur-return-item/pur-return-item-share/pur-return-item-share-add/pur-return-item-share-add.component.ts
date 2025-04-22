import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPurReturnItemFormSchema } from 'de-sdk-core/form-schema/amims-pur-return-item.form-schema';
import type { AmimsPurReturnItemDto } from 'de-sdk-core/models';
import { PurReturnItemService } from 'de-sdk-core/services';

import { MpartService } from 'de-sdk-core/services';
import { PurGrnItemService } from 'de-sdk-core/services';
import { PurPoItemService } from 'de-sdk-core/services';
import { PurReturnService } from 'de-sdk-core/services';

@Component({
    selector: 'app-pur-return-item-share-add',
    templateUrl: './pur-return-item-share-add.component.html',
    styleUrl: './pur-return-item-share-add.component.scss'
})
export class PurReturnItemShareAddComponent {
    @Input('purReturnItem') purReturnItem: AmimsPurReturnItemDto = {
        idPurReturnItem: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.purReturnItem && this.purReturnItem.idPurReturnItem) {
            this.form?.patchValue(this.purReturnItem);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private purReturnItemService: PurReturnItemService,
        private mpartService: MpartService,
        private purGrnItemService: PurGrnItemService,
        private purPoItemService: PurPoItemService,
        private purReturnService: PurReturnService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPurReturnItemFormSchema, {
            kodePurReturnItem: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'PurReturnItem');

        this.getAllMpart();
        this.getAllPurGrnItem();
        this.getAllPurPoItem();
        this.getAllPurReturn();
    }

    listMpart: any[] = [];

    listPurGrnItem: any[] = [];

    listPurPoItem: any[] = [];

    listPurReturn: any[] = [];


    // untuk fungsi get ALL relation
    getAllMpart() {
        this.mpartService.mpartControllerFindAll().subscribe(
            data => this.listMpart = data.data ?? []
        );
    }
    getAllPurGrnItem() {
        this.purGrnItemService.purGrnItemControllerFindAll().subscribe(
            data => this.listPurGrnItem = data.data ?? []
        );
    }
    getAllPurPoItem() {
        this.purPoItemService.purPoItemControllerFindAll().subscribe(
            data => this.listPurPoItem = data.data ?? []
        );
    }
    getAllPurReturn() {
        this.purReturnService.purReturnControllerFindAll().subscribe(
            data => this.listPurReturn = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsPurReturnItemFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.purReturnItem.idPurReturnItem ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.purReturnItemService.purReturnItemControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purReturnItem berhasil disimpan.');
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
        this.purReturnItemService.purReturnItemControllerUpdate({ id: this.purReturnItem.idPurReturnItem, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purReturnItem berhasil diperbarui.');
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
