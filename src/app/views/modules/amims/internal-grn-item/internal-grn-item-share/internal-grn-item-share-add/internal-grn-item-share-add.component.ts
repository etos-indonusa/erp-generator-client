import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsInternalGrnItemFormSchema } from 'de-sdk-core/form-schema/amims-internal-grn-item.form-schema'; 
import type  { AmimsInternalGrnItemDto } from 'de-sdk-core/models';
import { InternalGrnItemService } from 'de-sdk-core/services';

import { EngineerPrisItemService } from 'de-sdk-core/services';
import { InternalGrnService } from 'de-sdk-core/services';
import { MpartService } from 'de-sdk-core/services';
import { PartService } from 'de-sdk-core/services';

@Component({
    selector: 'app-internal-grn-item-share-add',
    templateUrl: './internal-grn-item-share-add.component.html',
    styleUrl: './internal-grn-item-share-add.component.scss'
})
export class InternalGrnItemShareAddComponent {
    @Input('internalGrnItem') internalGrnItem: AmimsInternalGrnItemDto = {
  idInternalGrnItem: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.internalGrnItem && this.internalGrnItem.idInternalGrnItem) {
        this.form?.patchValue(this.internalGrnItem);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private internalGrnItemService: InternalGrnItemService,
                        private engineerPrisItemService: EngineerPrisItemService,
                private internalGrnService: InternalGrnService,
                private mpartService: MpartService,
                private partService: PartService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsInternalGrnItemFormSchema, {
            kodeInternalGrnItem: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'InternalGrnItem');

                            this.getAllEngineerPrisItem();
                    this.getAllInternalGrn();
                    this.getAllMpart();
                    this.getAllPart();
                    }
    
    listEngineerPrisItem: any[] = [];
    
    listInternalGrn: any[] = [];
    
    listMpart: any[] = [];
    
    listPart: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllEngineerPrisItem() {
    this.engineerPrisItemService.engineerPrisItemControllerFindAll().subscribe(
      data => this.listEngineerPrisItem = data.data ?? []
    );
  }
        getAllInternalGrn() {
    this.internalGrnService.internalGrnControllerFindAll().subscribe(
      data => this.listInternalGrn = data.data ?? []
    );
  }
        getAllMpart() {
    this.mpartService.mpartControllerFindAll().subscribe(
      data => this.listMpart = data.data ?? []
    );
  }
        getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsInternalGrnItemFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.internalGrnItem.idInternalGrnItem ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.internalGrnItemService.internalGrnItemControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data internalGrnItem berhasil disimpan.');
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
        this.internalGrnItemService.internalGrnItemControllerUpdate({ id: this.internalGrnItem.idInternalGrnItem, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data internalGrnItem berhasil diperbarui.');
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
