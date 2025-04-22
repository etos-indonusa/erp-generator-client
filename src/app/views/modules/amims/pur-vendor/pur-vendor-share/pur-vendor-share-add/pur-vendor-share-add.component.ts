import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPurVendorFormSchema } from 'de-sdk-core/form-schema/amims-pur-vendor.form-schema'; 
import type  { AmimsPurVendorDto } from 'de-sdk-core/models';
import { PurVendorService } from 'de-sdk-core/services';

import { McurrencyService } from 'de-sdk-core/services';
import { UsersService } from 'de-sdk-core/services';

@Component({
    selector: 'app-pur-vendor-share-add',
    templateUrl: './pur-vendor-share-add.component.html',
    styleUrl: './pur-vendor-share-add.component.scss'
})
export class PurVendorShareAddComponent {
    @Input('purVendor') purVendor: AmimsPurVendorDto = {
  idPurVendor: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.purVendor && this.purVendor.idPurVendor) {
        this.form?.patchValue(this.purVendor);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private purVendorService: PurVendorService,
                        private mcurrencyService: McurrencyService,
                private usersService: UsersService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPurVendorFormSchema, {
            kodePurVendor: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PurVendor');

                            this.getAllMcurrency();
                    this.getAllUser();
                    }
    
    listMcurrency: any[] = [];
    
    listUser: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllMcurrency() {
    this.mcurrencyService.mcurrencyControllerFindAll().subscribe(
      data => this.listMcurrency = data.data ?? []
    );
  }
        getAllUser() {
    this.usersService.usersControllerFindAll().subscribe(
      data => this.listUser = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsPurVendorFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.purVendor.idPurVendor ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.purVendorService.purVendorControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purVendor berhasil disimpan.');
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
        this.purVendorService.purVendorControllerUpdate({ id: this.purVendor.idPurVendor, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purVendor berhasil diperbarui.');
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
