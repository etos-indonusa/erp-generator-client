import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPurVendorContactFormSchema } from 'de-sdk-core/form-schema/amims-pur-vendor-contact.form-schema'; 
import type  { AmimsPurVendorContactDto } from 'de-sdk-core/models';
import { PurVendorContactService } from 'de-sdk-core/services';

import { PurVendorService } from 'de-sdk-core/services';

@Component({
    selector: 'app-pur-vendor-contact-share-add',
    templateUrl: './pur-vendor-contact-share-add.component.html',
    styleUrl: './pur-vendor-contact-share-add.component.scss'
})
export class PurVendorContactShareAddComponent {
    @Input('purVendorContact') purVendorContact: AmimsPurVendorContactDto = {
  idPurVendorContact: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.purVendorContact && this.purVendorContact.idPurVendorContact) {
        this.form?.patchValue(this.purVendorContact);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private purVendorContactService: PurVendorContactService,
                        private purVendorService: PurVendorService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPurVendorContactFormSchema, {
            kodePurVendorContact: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PurVendorContact');

                            this.getAllPurVendor();
                    }
    
    listPurVendor: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllPurVendor() {
    this.purVendorService.purVendorControllerFindAll().subscribe(
      data => this.listPurVendor = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsPurVendorContactFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.purVendorContact.idPurVendorContact ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.purVendorContactService.purVendorContactControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purVendorContact berhasil disimpan.');
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
        this.purVendorContactService.purVendorContactControllerUpdate({ id: this.purVendorContact.idPurVendorContact, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data purVendorContact berhasil diperbarui.');
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
