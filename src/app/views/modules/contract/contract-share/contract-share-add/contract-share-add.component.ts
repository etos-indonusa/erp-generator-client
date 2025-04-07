import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { ContractFormSchema } from 'src/sdk/core/form-schema/contract.form-schema'; 
import type  { ContractDto } from 'src/sdk/core/models';
import { ContractService } from 'src/sdk/core/services';

import { ClientService } from 'src/sdk/core/services';

@Component({
    selector: 'app-contract-share-add',
    templateUrl: './contract-share-add.component.html',
    styleUrl: './contract-share-add.component.scss'
})
export class ContractShareAddComponent {
    @Input('contract') contract: ContractDto = {
  idClient: '',
  idContract: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.contract && this.contract.idContract) {
        this.form?.patchValue(this.contract);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private contractService: ContractService,
                        private clientService: ClientService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, ContractFormSchema, {
            kodeContract: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        });

                            this.getAllClient();
                    }
    
    listClient: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllClient() {
    this.clientService.clientControllerFindAll().subscribe(
      data => this.listClient = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(ContractFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.contract.idContract ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.contractService.contractControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data contract berhasil disimpan.');
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
        this.contractService.contractControllerUpdate({ id: this.contract.idContract, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data contract berhasil diperbarui.');
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
