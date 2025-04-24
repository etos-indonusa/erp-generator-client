import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsQaTransferItemFormSchema } from 'de-sdk-core'; 
import type  { AmimsQaTransferItemDto } from 'de-sdk-core';
import { QaTransferItemService } from 'de-sdk-core';

import { MpcSelfMaintenanceService } from 'de-sdk-core';
import { PurPrclService } from 'de-sdk-core';
import { QaTransferService } from 'de-sdk-core';

@Component({
    selector: 'app-qa-transfer-item-share-add',
    templateUrl: './qa-transfer-item-share-add.component.html',
    styleUrl: './qa-transfer-item-share-add.component.scss'
})
export class QaTransferItemShareAddComponent {
    @Input('qaTransferItem') qaTransferItem: AmimsQaTransferItemDto = {
  idQaTransferItem: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.qaTransferItem && this.qaTransferItem.idQaTransferItem) {
        this.form?.patchValue(this.qaTransferItem);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private qaTransferItemService: QaTransferItemService,
                        private mpcSelfMaintenanceService: MpcSelfMaintenanceService,
                private purPrclService: PurPrclService,
                private qaTransferService: QaTransferService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsQaTransferItemFormSchema, {
            kodeQaTransferItem: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'QaTransferItem');

                            this.getAllMpcSelfMaintenance();
                    this.getAllPurPrcl();
                    this.getAllQaTransfer();
                    }
    
    listMpcSelfMaintenance: any[] = [];
    
    listPurPrcl: any[] = [];
    
    listQaTransfer: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllMpcSelfMaintenance() {
    this.mpcSelfMaintenanceService.mpcSelfMaintenanceControllerFindAll().subscribe(
      data => this.listMpcSelfMaintenance = data.data ?? []
    );
  }
        getAllPurPrcl() {
    this.purPrclService.purPrclControllerFindAll().subscribe(
      data => this.listPurPrcl = data.data ?? []
    );
  }
        getAllQaTransfer() {
    this.qaTransferService.qaTransferControllerFindAll().subscribe(
      data => this.listQaTransfer = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsQaTransferItemFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.qaTransferItem.idQaTransferItem ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.qaTransferItemService.qaTransferItemControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data qaTransferItem berhasil disimpan.');
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
        this.qaTransferItemService.qaTransferItemControllerUpdate({ id: this.qaTransferItem.idQaTransferItem, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data qaTransferItem berhasil diperbarui.');
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
