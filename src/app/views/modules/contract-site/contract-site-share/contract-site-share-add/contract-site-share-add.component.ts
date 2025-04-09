import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { ContractSiteFormSchema } from 'src/sdk/core/form-schema/contract-site.form-schema'; 
import type  { ContractSiteDto } from 'src/sdk/core/models';
import { ContractSiteService } from 'src/sdk/core/services';

import { ClientSiteService } from 'src/sdk/core/services';
import { ContractService } from 'src/sdk/core/services';

@Component({
    selector: 'app-contract-site-share-add',
    templateUrl: './contract-site-share-add.component.html',
    styleUrl: './contract-site-share-add.component.scss'
})
export class ContractSiteShareAddComponent {
    @Input('contractSite') contractSite: ContractSiteDto = {
  idClientSite: '',
  idContract: '',
  idContractSite: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.contractSite && this.contractSite.idContractSite) {
        this.form?.patchValue(this.contractSite);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private contractSiteService: ContractSiteService,
                        private clientSiteService: ClientSiteService,
                private contractService: ContractService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, ContractSiteFormSchema, {
            kodeContractSite: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'ContractSite');

                            this.getAllClientSite();
                    this.getAllContract();
                    }
    
    listClientSite: any[] = [];
    
    listContract: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllClientSite() {
    this.clientSiteService.clientSiteControllerFindAll().subscribe(
      data => this.listClientSite = data.data ?? []
    );
  }
        getAllContract() {
    this.contractService.contractControllerFindAll().subscribe(
      data => this.listContract = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(ContractSiteFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.contractSite.idContractSite ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.contractSiteService.contractSiteControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data contractSite berhasil disimpan.');
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
        this.contractSiteService.contractSiteControllerUpdate({ id: this.contractSite.idContractSite, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data contractSite berhasil diperbarui.');
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
