import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPurPrItemFormSchema } from 'de-sdk-core/lib/form-schema/amims-pur-pr-item.form-schema';
import type { AmimsPurPrItemDto } from 'de-sdk-core/lib/models';
import { PurPrItemService } from 'de-sdk-core/lib/services';

import { MpartService } from 'de-sdk-core/lib/services';
import { MpcPiroItemService } from 'de-sdk-core/lib/services';
import { PurPrService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-pur-pr-item-share-add',
    templateUrl: './pur-pr-item-share-add.component.html',
    styleUrl: './pur-pr-item-share-add.component.scss'
})
export class PurPrItemShareAddComponent {
    @Input('purPrItem') purPrItem: AmimsPurPrItemDto = {
        idPurPrItem: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.purPrItem && this.purPrItem.idPurPrItem) {
            this.form?.patchValue(this.purPrItem);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private purPrItemService: PurPrItemService,
        private mpartService: MpartService,
        private mpcPiroItemService: MpcPiroItemService,
        private purPrService: PurPrService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPurPrItemFormSchema, {
            kodePurPrItem: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'PurPrItem');

        this.getAllMpart();
        this.getAllMpcPiroItem();
        this.getAllPurPr();
    }

    listMpart: any[] = [];

    listMpcPiroItem: any[] = [];

    listPurPr: any[] = [];


    // untuk fungsi get ALL relation
    getAllMpart() {
        this.mpartService.mpartControllerFindAll().subscribe(
            data => this.listMpart = data.data ?? []
        );
    }
    getAllMpcPiroItem() {
        this.mpcPiroItemService.mpcPiroItemControllerFindAll().subscribe(
            data => this.listMpcPiroItem = data.data ?? []
        );
    }
    getAllPurPr() {
        this.purPrService.purPrControllerFindAll().subscribe(
            data => this.listPurPr = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsPurPrItemFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.purPrItem.idPurPrItem ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.purPrItemService.purPrItemControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purPrItem berhasil disimpan.');
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
        this.purPrItemService.purPrItemControllerUpdate({ id: this.purPrItem.idPurPrItem, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purPrItem berhasil diperbarui.');
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
