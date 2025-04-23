import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsStoreTransferItemFormSchema } from 'de-sdk-core/lib/form-schema/amims-store-transfer-item.form-schema'; 
import type  { AmimsStoreTransferItemDto } from 'de-sdk-core/lib/models';
import { StoreTransferItemService } from 'de-sdk-core/lib/services';

import { EngineerPmtrItemService } from 'de-sdk-core/lib/services';
import { PartService } from 'de-sdk-core/lib/services';
import { StoreTransferService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-store-transfer-item-share-add',
    templateUrl: './store-transfer-item-share-add.component.html',
    styleUrl: './store-transfer-item-share-add.component.scss'
})
export class StoreTransferItemShareAddComponent {
    @Input('storeTransferItem') storeTransferItem: AmimsStoreTransferItemDto = {
  idStoreTransferItem: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.storeTransferItem && this.storeTransferItem.idStoreTransferItem) {
        this.form?.patchValue(this.storeTransferItem);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private storeTransferItemService: StoreTransferItemService,
                        private engineerPmtrItemService: EngineerPmtrItemService,
                private partService: PartService,
                private storeTransferService: StoreTransferService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsStoreTransferItemFormSchema, {
            kodeStoreTransferItem: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'StoreTransferItem');

                            this.getAllEngineerPmtrItem();
                    this.getAllPart();
                    this.getAllStoreTransfer();
                    }
    
    listEngineerPmtrItem: any[] = [];
    
    listPart: any[] = [];
    
    listStoreTransfer: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllEngineerPmtrItem() {
    this.engineerPmtrItemService.engineerPmtrItemControllerFindAll().subscribe(
      data => this.listEngineerPmtrItem = data.data ?? []
    );
  }
        getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        getAllStoreTransfer() {
    this.storeTransferService.storeTransferControllerFindAll().subscribe(
      data => this.listStoreTransfer = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsStoreTransferItemFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.storeTransferItem.idStoreTransferItem ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.storeTransferItemService.storeTransferItemControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data storeTransferItem berhasil disimpan.');
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
        this.storeTransferItemService.storeTransferItemControllerUpdate({ id: this.storeTransferItem.idStoreTransferItem, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data storeTransferItem berhasil diperbarui.');
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
