import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsEngineerRtiPartFormSchema } from 'de-sdk-core'; 
import type  { AmimsEngineerRtiPartDto } from 'de-sdk-core';
import { EngineerRtiPartService } from 'de-sdk-core';

import { EngineerRtiService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { PartInstallService } from 'de-sdk-core';

@Component({
    selector: 'app-engineer-rti-part-share-add',
    templateUrl: './engineer-rti-part-share-add.component.html',
    styleUrl: './engineer-rti-part-share-add.component.scss'
})
export class EngineerRtiPartShareAddComponent {
    @Input('engineerRtiPart') engineerRtiPart: AmimsEngineerRtiPartDto = {
  idEngineerRtiPart: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.engineerRtiPart && this.engineerRtiPart.idEngineerRtiPart) {
        this.form?.patchValue(this.engineerRtiPart);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private engineerRtiPartService: EngineerRtiPartService,
                        private engineerRtiService: EngineerRtiService,
                private partService: PartService,
                private partInstallService: PartInstallService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsEngineerRtiPartFormSchema, {
            kodeEngineerRtiPart: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'EngineerRtiPart');

                            this.getAllEngineerRti();
                    this.getAllPart();
                    this.getAllPartInstall();
                    }
    
    listEngineerRti: any[] = [];
    
    listPart: any[] = [];
    
    listPartInstall: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllEngineerRti() {
    this.engineerRtiService.engineerRtiControllerFindAll().subscribe(
      data => this.listEngineerRti = data.data ?? []
    );
  }
        getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        getAllPartInstall() {
    this.partInstallService.partInstallControllerFindAll().subscribe(
      data => this.listPartInstall = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsEngineerRtiPartFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.engineerRtiPart.idEngineerRtiPart ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.engineerRtiPartService.engineerRtiPartControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerRtiPart berhasil disimpan.');
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
        this.engineerRtiPartService.engineerRtiPartControllerUpdate({ id: this.engineerRtiPart.idEngineerRtiPart, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerRtiPart berhasil diperbarui.');
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
