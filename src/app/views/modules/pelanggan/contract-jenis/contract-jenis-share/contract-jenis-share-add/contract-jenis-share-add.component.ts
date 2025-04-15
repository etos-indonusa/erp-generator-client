import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { PelangganContractJenisFormSchema } from 'src/sdk/core/form-schema/pelanggan-contract-jenis.form-schema'; 
import type { PelangganContractJenisDto } from 'src/sdk/core/models';
import { ContractJenisService } from 'src/sdk/core/services';

 
@Component({
    selector: 'app-contract-jenis-share-add',
    templateUrl: './contract-jenis-share-add.component.html',
    styleUrl: './contract-jenis-share-add.component.scss'
})
export class ContractJenisShareAddComponent {
    @Input('contractJenis') contractJenis: PelangganContractJenisDto = {
  idContractJenis: '',
  namaContractJenis: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.contractJenis && this.contractJenis.idContractJenis) {
        this.form?.patchValue(this.contractJenis);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private contractJenisService: ContractJenisService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, PelangganContractJenisFormSchema, {
            kodeContractJenis: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'ContractJenis');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(PelangganContractJenisFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.contractJenis.idContractJenis ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.contractJenisService.contractJenisControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data contractJenis berhasil disimpan.');
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
        this.contractJenisService.contractJenisControllerUpdate({ id: this.contractJenis.idContractJenis, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data contractJenis berhasil diperbarui.');
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
