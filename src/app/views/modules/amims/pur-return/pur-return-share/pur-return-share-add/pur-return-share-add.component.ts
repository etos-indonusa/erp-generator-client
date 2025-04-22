import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPurReturnFormSchema } from 'de-sdk-core/form-schema/amims-pur-return.form-schema'; 
import type  { AmimsPurReturnDto } from 'de-sdk-core/models';
import { PurReturnService } from 'de-sdk-core/services';

import { PurPoService } from 'de-sdk-core/services';
import { PurVendorService } from 'de-sdk-core/services';
import { UsersService } from 'de-sdk-core/services';

@Component({
    selector: 'app-pur-return-share-add',
    templateUrl: './pur-return-share-add.component.html',
    styleUrl: './pur-return-share-add.component.scss'
})
export class PurReturnShareAddComponent {
    @Input('purReturn') purReturn: AmimsPurReturnDto = {
  idPurReturn: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.purReturn && this.purReturn.idPurReturn) {
        this.form?.patchValue(this.purReturn);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private purReturnService: PurReturnService,
                        private purPoService: PurPoService,
                private purVendorService: PurVendorService,
                private usersService: UsersService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPurReturnFormSchema, {
            kodePurReturn: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PurReturn');

                            this.getAllPurPo();
                    this.getAllPurVendor();
                    this.getAllUser();
                    }
    
    listPurPo: any[] = [];
    
    listPurVendor: any[] = [];
    
    listUser: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllPurPo() {
    this.purPoService.purPoControllerFindAll().subscribe(
      data => this.listPurPo = data.data ?? []
    );
  }
        getAllPurVendor() {
    this.purVendorService.purVendorControllerFindAll().subscribe(
      data => this.listPurVendor = data.data ?? []
    );
  }
        getAllUser() {
    this.usersService.usersControllerFindAll().subscribe(
      data => this.listUser = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsPurReturnFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.purReturn.idPurReturn ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.purReturnService.purReturnControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purReturn berhasil disimpan.');
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
        this.purReturnService.purReturnControllerUpdate({ id: this.purReturn.idPurReturn, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purReturn berhasil diperbarui.');
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
