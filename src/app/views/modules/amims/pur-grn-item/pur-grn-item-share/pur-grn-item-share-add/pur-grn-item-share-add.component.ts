import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPurGrnItemFormSchema } from 'de-sdk-core'; 
import type  { AmimsPurGrnItemDto } from 'de-sdk-core';
import { PurGrnItemService } from 'de-sdk-core';

import { MpartService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { PurGrnService } from 'de-sdk-core';
import { PurPoItemService } from 'de-sdk-core';

@Component({
    selector: 'app-pur-grn-item-share-add',
    templateUrl: './pur-grn-item-share-add.component.html',
    styleUrl: './pur-grn-item-share-add.component.scss'
})
export class PurGrnItemShareAddComponent {
    @Input('purGrnItem') purGrnItem: AmimsPurGrnItemDto = {
  idPurGrnItem: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.purGrnItem && this.purGrnItem.idPurGrnItem) {
        this.form?.patchValue(this.purGrnItem);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private purGrnItemService: PurGrnItemService,
                        private mpartService: MpartService,
                private partService: PartService,
                private purGrnService: PurGrnService,
                private purPoItemService: PurPoItemService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPurGrnItemFormSchema, {
            kodePurGrnItem: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PurGrnItem');

                            this.getAllMpart();
                    this.getAllPart();
                    this.getAllPurGrn();
                    this.getAllPurPoItem();
                    }
    
    listMpart: any[] = [];
    
    listPart: any[] = [];
    
    listPurGrn: any[] = [];
    
    listPurPoItem: any[] = [];
    

    // untuk fungsi get ALL relation
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
        getAllPurGrn() {
    this.purGrnService.purGrnControllerFindAll().subscribe(
      data => this.listPurGrn = data.data ?? []
    );
  }
        getAllPurPoItem() {
    this.purPoItemService.purPoItemControllerFindAll().subscribe(
      data => this.listPurPoItem = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsPurGrnItemFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.purGrnItem.idPurGrnItem ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.purGrnItemService.purGrnItemControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purGrnItem berhasil disimpan.');
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
        this.purGrnItemService.purGrnItemControllerUpdate({ id: this.purGrnItem.idPurGrnItem, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purGrnItem berhasil diperbarui.');
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
