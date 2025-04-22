import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsShippingFormSchema } from 'de-sdk-core/form-schema/amims-shipping.form-schema'; 
import type { AmimsShippingDto } from 'de-sdk-core/models';
import { ShippingService } from 'de-sdk-core/services';

 
@Component({
    selector: 'app-shipping-share-add',
    templateUrl: './shipping-share-add.component.html',
    styleUrl: './shipping-share-add.component.scss'
})
export class ShippingShareAddComponent {
    @Input('shipping') shipping: AmimsShippingDto = {
  idShipping: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.shipping && this.shipping.idShipping) {
        this.form?.patchValue(this.shipping);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private shippingService: ShippingService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsShippingFormSchema, {
            // kodeShipping: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'Shipping');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsShippingFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.shipping.idShipping ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.shippingService.shippingControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data shipping berhasil disimpan.');
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
        this.shippingService.shippingControllerUpdate({ id: this.shipping.idShipping, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data shipping berhasil diperbarui.');
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
