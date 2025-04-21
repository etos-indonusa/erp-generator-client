import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsEngineerPrisReturnFormSchema } from 'src/sdk/core/form-schema/amims-engineer-pris-return.form-schema'; 
import type  { AmimsEngineerPrisReturnDto } from 'src/sdk/core/models';
import { EngineerPrisReturnService } from 'src/sdk/core/services';

import { EngineerPrisService } from 'src/sdk/core/services';

@Component({
    selector: 'app-engineer-pris-return-share-add',
    templateUrl: './engineer-pris-return-share-add.component.html',
    styleUrl: './engineer-pris-return-share-add.component.scss'
})
export class EngineerPrisReturnShareAddComponent {
    @Input('engineerPrisReturn') engineerPrisReturn: AmimsEngineerPrisReturnDto = {
  idEngineerPrisReturn: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.engineerPrisReturn && this.engineerPrisReturn.idEngineerPrisReturn) {
        this.form?.patchValue(this.engineerPrisReturn);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private engineerPrisReturnService: EngineerPrisReturnService,
                        private engineerPrisService: EngineerPrisService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsEngineerPrisReturnFormSchema, {
            kodeEngineerPrisReturn: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'EngineerPrisReturn');

                            this.getAllEngineerPris();
                    }
    
    listEngineerPris: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllEngineerPris() {
    this.engineerPrisService.engineerPrisControllerFindAll().subscribe(
      data => this.listEngineerPris = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsEngineerPrisReturnFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.engineerPrisReturn.idEngineerPrisReturn ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.engineerPrisReturnService.engineerPrisReturnControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerPrisReturn berhasil disimpan.');
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
        this.engineerPrisReturnService.engineerPrisReturnControllerUpdate({ id: this.engineerPrisReturn.idEngineerPrisReturn, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerPrisReturn berhasil diperbarui.');
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
