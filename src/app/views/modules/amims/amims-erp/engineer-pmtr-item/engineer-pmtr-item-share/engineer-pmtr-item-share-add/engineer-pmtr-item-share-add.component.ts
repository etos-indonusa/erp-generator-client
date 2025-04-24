import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsEngineerPmtrItemFormSchema } from 'de-sdk-core'; 
import type  { AmimsEngineerPmtrItemDto } from 'de-sdk-core';
import { EngineerPmtrItemService } from 'de-sdk-core';

import { EngineerPmtrService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';

@Component({
    selector: 'app-engineer-pmtr-item-share-add',
    templateUrl: './engineer-pmtr-item-share-add.component.html',
    styleUrl: './engineer-pmtr-item-share-add.component.scss'
})
export class EngineerPmtrItemShareAddComponent {
    @Input('engineerPmtrItem') engineerPmtrItem: AmimsEngineerPmtrItemDto = {
  idEngineerPmtrItem: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.engineerPmtrItem && this.engineerPmtrItem.idEngineerPmtrItem) {
        this.form?.patchValue(this.engineerPmtrItem);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private engineerPmtrItemService: EngineerPmtrItemService,
                        private engineerPmtrService: EngineerPmtrService,
                private mpartService: MpartService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsEngineerPmtrItemFormSchema, {
            kodeEngineerPmtrItem: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'EngineerPmtrItem');

                            this.getAllEngineerPmtr();
                    this.getAllMpart();
                    }
    
    listEngineerPmtr: any[] = [];
    
    listMpart: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllEngineerPmtr() {
    this.engineerPmtrService.engineerPmtrControllerFindAll().subscribe(
      data => this.listEngineerPmtr = data.data ?? []
    );
  }
        getAllMpart() {
    this.mpartService.mpartControllerFindAll().subscribe(
      data => this.listMpart = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsEngineerPmtrItemFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.engineerPmtrItem.idEngineerPmtrItem ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.engineerPmtrItemService.engineerPmtrItemControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerPmtrItem berhasil disimpan.');
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
        this.engineerPmtrItemService.engineerPmtrItemControllerUpdate({ id: this.engineerPmtrItem.idEngineerPmtrItem, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerPmtrItem berhasil diperbarui.');
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
