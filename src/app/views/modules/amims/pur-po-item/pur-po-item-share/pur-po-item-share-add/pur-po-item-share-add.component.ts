import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPurPoItemFormSchema } from 'de-sdk-core/form-schema/amims-pur-po-item.form-schema'; 
import type  { AmimsPurPoItemDto } from 'de-sdk-core/models';
import { PurPoItemService } from 'de-sdk-core/services';

import { EngineerRtiService } from 'de-sdk-core/services';
import { MpartService } from 'de-sdk-core/services';
import { PartService } from 'de-sdk-core/services';
import { PurPoService } from 'de-sdk-core/services';
import { PurPrItemService } from 'de-sdk-core/services';
import { PurPrclService } from 'de-sdk-core/services';
import { QaRpdService } from 'de-sdk-core/services';

@Component({
    selector: 'app-pur-po-item-share-add',
    templateUrl: './pur-po-item-share-add.component.html',
    styleUrl: './pur-po-item-share-add.component.scss'
})
export class PurPoItemShareAddComponent {
    @Input('purPoItem') purPoItem: AmimsPurPoItemDto = {
  idPurPoItem: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.purPoItem && this.purPoItem.idPurPoItem) {
        this.form?.patchValue(this.purPoItem);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private purPoItemService: PurPoItemService,
                        private engineerRtiService: EngineerRtiService,
                private mpartService: MpartService,
                private partService: PartService,
                private purPoService: PurPoService,
                private purPrItemService: PurPrItemService,
                private purPrclService: PurPrclService,
                private qaRpdService: QaRpdService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPurPoItemFormSchema, {
            kodePurPoItem: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PurPoItem');

                            this.getAllEngineerRti();
                    this.getAllMpart();
                    this.getAllPart();
                    this.getAllPurPo();
                    this.getAllPurPrItem();
                    this.getAllPurPrcl();
                    this.getAllQaRpd();
                    }
    
    listEngineerRti: any[] = [];
    
    listMpart: any[] = [];
    
    listPart: any[] = [];
    
    listPurPo: any[] = [];
    
    listPurPrItem: any[] = [];
    
    listPurPrcl: any[] = [];
    
    listQaRpd: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllEngineerRti() {
    this.engineerRtiService.engineerRtiControllerFindAll().subscribe(
      data => this.listEngineerRti = data.data ?? []
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
        getAllPurPo() {
    this.purPoService.purPoControllerFindAll().subscribe(
      data => this.listPurPo = data.data ?? []
    );
  }
        getAllPurPrItem() {
    this.purPrItemService.purPrItemControllerFindAll().subscribe(
      data => this.listPurPrItem = data.data ?? []
    );
  }
        getAllPurPrcl() {
    this.purPrclService.purPrclControllerFindAll().subscribe(
      data => this.listPurPrcl = data.data ?? []
    );
  }
        getAllQaRpd() {
    this.qaRpdService.qaRpdControllerFindAll().subscribe(
      data => this.listQaRpd = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsPurPoItemFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.purPoItem.idPurPoItem ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.purPoItemService.purPoItemControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purPoItem berhasil disimpan.');
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
        this.purPoItemService.purPoItemControllerUpdate({ id: this.purPoItem.idPurPoItem, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purPoItem berhasil diperbarui.');
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
