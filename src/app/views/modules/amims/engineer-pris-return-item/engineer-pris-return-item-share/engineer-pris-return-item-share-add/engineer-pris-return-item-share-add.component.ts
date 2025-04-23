import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsEngineerPrisReturnItemFormSchema } from 'de-sdk-core'; 
import type  { AmimsEngineerPrisReturnItemDto } from 'de-sdk-core';
import { EngineerPrisReturnItemService } from 'de-sdk-core';

import { EngineerPrisItemService } from 'de-sdk-core';

@Component({
    selector: 'app-engineer-pris-return-item-share-add',
    templateUrl: './engineer-pris-return-item-share-add.component.html',
    styleUrl: './engineer-pris-return-item-share-add.component.scss'
})
export class EngineerPrisReturnItemShareAddComponent {
    @Input('engineerPrisReturnItem') engineerPrisReturnItem: AmimsEngineerPrisReturnItemDto = {
  idEngineerPrisReturnItem: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.engineerPrisReturnItem && this.engineerPrisReturnItem.idEngineerPrisReturnItem) {
        this.form?.patchValue(this.engineerPrisReturnItem);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private engineerPrisReturnItemService: EngineerPrisReturnItemService,
                        private engineerPrisItemService: EngineerPrisItemService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsEngineerPrisReturnItemFormSchema, {
            kodeEngineerPrisReturnItem: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'EngineerPrisReturnItem');

                            this.getAllEngineerPrisItem();
                    }
    
    listEngineerPrisItem: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllEngineerPrisItem() {
    this.engineerPrisItemService.engineerPrisItemControllerFindAll().subscribe(
      data => this.listEngineerPrisItem = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsEngineerPrisReturnItemFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.engineerPrisReturnItem.idEngineerPrisReturnItem ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.engineerPrisReturnItemService.engineerPrisReturnItemControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerPrisReturnItem berhasil disimpan.');
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
        this.engineerPrisReturnItemService.engineerPrisReturnItemControllerUpdate({ id: this.engineerPrisReturnItem.idEngineerPrisReturnItem, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerPrisReturnItem berhasil diperbarui.');
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
