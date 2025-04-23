import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsWarrantyFormSchema } from 'de-sdk-core';
import type { AmimsWarrantyDto } from 'de-sdk-core';
import { PurVendorService, WarrantyService } from 'de-sdk-core';

import { PartService } from 'de-sdk-core';

@Component({
    selector: 'app-warranty-share-add',
    templateUrl: './warranty-share-add.component.html',
    styleUrl: './warranty-share-add.component.scss'
})
export class WarrantyShareAddComponent {
    @Input('warranty') warranty: AmimsWarrantyDto = {
        idWarranty: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.warranty && this.warranty.idWarranty) {
            this.form?.patchValue(this.warranty);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private warrantyService: WarrantyService,
        private partService: PartService,
        private purVendorService: PurVendorService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsWarrantyFormSchema, {
            // kodeWarranty: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        }, 'Warranty');

        this.getAllPart();
        this.getAllVendor();
    }

    listPart: any[] = [];

    listVendor: any[] = [];


    // untuk fungsi get ALL relation
    getAllPart() {
        this.partService.partControllerFindAll().subscribe(
            data => this.listPart = data.data ?? []
        );
    }
    getAllVendor() {
        this.purVendorService.purVendorControllerFindAll().subscribe(
            data => this.listVendor = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsWarrantyFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.warranty.idWarranty ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.warrantyService.warrantyControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data warranty berhasil disimpan.');
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
        this.warrantyService.warrantyControllerUpdate({ id: this.warranty.idWarranty, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data warranty berhasil diperbarui.');
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
