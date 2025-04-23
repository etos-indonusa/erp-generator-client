import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMpcPiroItemFormSchema } from 'de-sdk-core'; 
import type  { AmimsMpcPiroItemDto } from 'de-sdk-core';
import { MpcPiroItemService } from 'de-sdk-core';

import { MpartService } from 'de-sdk-core';
import { MpcPiroService } from 'de-sdk-core';

@Component({
    selector: 'app-mpc-piro-item-share-add',
    templateUrl: './mpc-piro-item-share-add.component.html',
    styleUrl: './mpc-piro-item-share-add.component.scss'
})
export class MpcPiroItemShareAddComponent {
    @Input('mpcPiroItem') mpcPiroItem: AmimsMpcPiroItemDto = {
  idMpcPiroItem: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.mpcPiroItem && this.mpcPiroItem.idMpcPiroItem) {
        this.form?.patchValue(this.mpcPiroItem);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private mpcPiroItemService: MpcPiroItemService,
                        private mpartService: MpartService,
                private mpcPiroService: MpcPiroService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMpcPiroItemFormSchema, {
            kodeMpcPiroItem: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'MpcPiroItem');

                            this.getAllMpart();
                    this.getAllMpcPiro();
                    }
    
    listMpart: any[] = [];
    
    listMpcPiro: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllMpart() {
    this.mpartService.mpartControllerFindAll().subscribe(
      data => this.listMpart = data.data ?? []
    );
  }
        getAllMpcPiro() {
    this.mpcPiroService.mpcPiroControllerFindAll().subscribe(
      data => this.listMpcPiro = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsMpcPiroItemFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.mpcPiroItem.idMpcPiroItem ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.mpcPiroItemService.mpcPiroItemControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpcPiroItem berhasil disimpan.');
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
        this.mpcPiroItemService.mpcPiroItemControllerUpdate({ id: this.mpcPiroItem.idMpcPiroItem, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpcPiroItem berhasil diperbarui.');
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
