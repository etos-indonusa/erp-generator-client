import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPurVendorItemFormSchema } from 'src/sdk/core/form-schema/amims-pur-vendor-item.form-schema'; 
import type  { AmimsPurVendorItemDto } from 'src/sdk/core/models';
import { PurVendorItemService } from 'src/sdk/core/services';

import { MpartService } from 'src/sdk/core/services';
import { PurVendorService } from 'src/sdk/core/services';

@Component({
    selector: 'app-pur-vendor-item-share-add',
    templateUrl: './pur-vendor-item-share-add.component.html',
    styleUrl: './pur-vendor-item-share-add.component.scss'
})
export class PurVendorItemShareAddComponent {
    @Input('purVendorItem') purVendorItem: AmimsPurVendorItemDto = {
  idPurVendorItem: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.purVendorItem && this.purVendorItem.idPurVendorItem) {
        this.form?.patchValue(this.purVendorItem);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private purVendorItemService: PurVendorItemService,
                        private mpartService: MpartService,
                private purVendorService: PurVendorService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPurVendorItemFormSchema, {
            kodePurVendorItem: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PurVendorItem');

                            this.getAllMpart();
                    this.getAllPurVendor();
                    }
    
    listMpart: any[] = [];
    
    listPurVendor: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllMpart() {
    this.mpartService.mpartControllerFindAll().subscribe(
      data => this.listMpart = data.data ?? []
    );
  }
        getAllPurVendor() {
    this.purVendorService.purVendorControllerFindAll().subscribe(
      data => this.listPurVendor = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsPurVendorItemFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.purVendorItem.idPurVendorItem ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.purVendorItemService.purVendorItemControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purVendorItem berhasil disimpan.');
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
        this.purVendorItemService.purVendorItemControllerUpdate({ id: this.purVendorItem.idPurVendorItem, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purVendorItem berhasil diperbarui.');
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
