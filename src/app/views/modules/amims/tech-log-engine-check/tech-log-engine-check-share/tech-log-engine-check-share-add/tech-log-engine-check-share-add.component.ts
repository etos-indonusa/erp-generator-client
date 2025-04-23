import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsTechLogEngineCheckFormSchema } from 'de-sdk-core/lib/form-schema/amims-tech-log-engine-check.form-schema'; 
import type  { AmimsTechLogEngineCheckDto } from 'de-sdk-core/lib/models';
import { TechLogEngineCheckService } from 'de-sdk-core/lib/services';

import { TechLogService } from 'de-sdk-core/lib/services';
import { TechLogEngineService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-tech-log-engine-check-share-add',
    templateUrl: './tech-log-engine-check-share-add.component.html',
    styleUrl: './tech-log-engine-check-share-add.component.scss'
})
export class TechLogEngineCheckShareAddComponent {
    @Input('techLogEngineCheck') techLogEngineCheck: AmimsTechLogEngineCheckDto = {
  idTechLogEngineCheck: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.techLogEngineCheck && this.techLogEngineCheck.idTechLogEngineCheck) {
        this.form?.patchValue(this.techLogEngineCheck);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private techLogEngineCheckService: TechLogEngineCheckService,
                        private techLogService: TechLogService,
                private techLogEngineService: TechLogEngineService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsTechLogEngineCheckFormSchema, {
            kodeTechLogEngineCheck: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'TechLogEngineCheck');

                            this.getAllTechLog();
                    this.getAllTechLogEngine();
                    }
    
    listTechLog: any[] = [];
    
    listTechLogEngine: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllTechLog() {
    this.techLogService.techLogControllerFindAll().subscribe(
      data => this.listTechLog = data.data ?? []
    );
  }
        getAllTechLogEngine() {
    this.techLogEngineService.techLogEngineControllerFindAll().subscribe(
      data => this.listTechLogEngine = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsTechLogEngineCheckFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.techLogEngineCheck.idTechLogEngineCheck ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.techLogEngineCheckService.techLogEngineCheckControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techLogEngineCheck berhasil disimpan.');
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
        this.techLogEngineCheckService.techLogEngineCheckControllerUpdate({ id: this.techLogEngineCheck.idTechLogEngineCheck, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techLogEngineCheck berhasil diperbarui.');
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
