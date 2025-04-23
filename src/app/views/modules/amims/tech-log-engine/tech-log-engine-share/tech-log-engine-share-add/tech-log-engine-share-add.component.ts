import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsTechLogEngineFormSchema } from 'de-sdk-core'; 
import type  { AmimsTechLogEngineDto } from 'de-sdk-core';
import { TechLogEngineService } from 'de-sdk-core';

import { PartService } from 'de-sdk-core';
import { TechLogService } from 'de-sdk-core';

@Component({
    selector: 'app-tech-log-engine-share-add',
    templateUrl: './tech-log-engine-share-add.component.html',
    styleUrl: './tech-log-engine-share-add.component.scss'
})
export class TechLogEngineShareAddComponent {
    @Input('techLogEngine') techLogEngine: AmimsTechLogEngineDto = {
  idTechLogEngine: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.techLogEngine && this.techLogEngine.idTechLogEngine) {
        this.form?.patchValue(this.techLogEngine);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private techLogEngineService: TechLogEngineService,
                        private partService: PartService,
                private techLogService: TechLogService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsTechLogEngineFormSchema, {
            kodeTechLogEngine: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'TechLogEngine');

                            this.getAllPart();
                    this.getAllTechLog();
                    }
    
    listPart: any[] = [];
    
    listTechLog: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        getAllTechLog() {
    this.techLogService.techLogControllerFindAll().subscribe(
      data => this.listTechLog = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsTechLogEngineFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.techLogEngine.idTechLogEngine ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.techLogEngineService.techLogEngineControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techLogEngine berhasil disimpan.');
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
        this.techLogEngineService.techLogEngineControllerUpdate({ id: this.techLogEngine.idTechLogEngine, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techLogEngine berhasil diperbarui.');
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
