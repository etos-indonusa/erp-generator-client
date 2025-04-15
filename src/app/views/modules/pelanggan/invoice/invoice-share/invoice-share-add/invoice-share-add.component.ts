import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { PelangganInvoiceFormSchema } from 'src/sdk/core/form-schema/pelanggan-invoice.form-schema'; 
import type  { PelangganInvoiceDto } from 'src/sdk/core/models';
import { InvoiceService } from 'src/sdk/core/services';

import { ContractService } from 'src/sdk/core/services';

@Component({
    selector: 'app-invoice-share-add',
    templateUrl: './invoice-share-add.component.html',
    styleUrl: './invoice-share-add.component.scss'
})
export class InvoiceShareAddComponent {
    @Input('invoice') invoice: PelangganInvoiceDto = {
  idInvoice: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.invoice && this.invoice.idInvoice) {
        this.form?.patchValue(this.invoice);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private invoiceService: InvoiceService,
                        private contractService: ContractService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, PelangganInvoiceFormSchema, {
            kodeInvoice: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'Invoice');

                            this.getAllContract();
                    }
    
    listContract: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllContract() {
    this.contractService.contractControllerFindAll().subscribe(
      data => this.listContract = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(PelangganInvoiceFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.invoice.idInvoice ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.invoiceService.invoiceControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data invoice berhasil disimpan.');
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
        this.invoiceService.invoiceControllerUpdate({ id: this.invoice.idInvoice, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data invoice berhasil diperbarui.');
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
