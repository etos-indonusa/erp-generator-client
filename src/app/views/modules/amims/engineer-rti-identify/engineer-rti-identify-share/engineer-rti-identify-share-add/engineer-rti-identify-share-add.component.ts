import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsEngineerRtiIdentifyFormSchema } from 'de-sdk-core/lib/form-schema/amims-engineer-rti-identify.form-schema'; 
import type  { AmimsEngineerRtiIdentifyDto } from 'de-sdk-core/lib/models';
import { EngineerRtiIdentifyService } from 'de-sdk-core/lib/services';

import { EngineerRtiService } from 'de-sdk-core/lib/services';
import { PartService } from 'de-sdk-core/lib/services';
import { PartInstallService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-engineer-rti-identify-share-add',
    templateUrl: './engineer-rti-identify-share-add.component.html',
    styleUrl: './engineer-rti-identify-share-add.component.scss'
})
export class EngineerRtiIdentifyShareAddComponent {
    @Input('engineerRtiIdentify') engineerRtiIdentify: AmimsEngineerRtiIdentifyDto = {
  idEngineerRtiIdentify: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.engineerRtiIdentify && this.engineerRtiIdentify.idEngineerRtiIdentify) {
        this.form?.patchValue(this.engineerRtiIdentify);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private engineerRtiIdentifyService: EngineerRtiIdentifyService,
                        private engineerRtiService: EngineerRtiService,
                private partService: PartService,
                private partInstallService: PartInstallService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsEngineerRtiIdentifyFormSchema, {
            kodeEngineerRtiIdentify: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'EngineerRtiIdentify');

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
        const labelMap = extractLabels(AmimsEngineerRtiIdentifyFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.engineerRtiIdentify.idEngineerRtiIdentify ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.engineerRtiIdentifyService.engineerRtiIdentifyControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerRtiIdentify berhasil disimpan.');
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
        this.engineerRtiIdentifyService.engineerRtiIdentifyControllerUpdate({ id: this.engineerRtiIdentify.idEngineerRtiIdentify, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerRtiIdentify berhasil diperbarui.');
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
