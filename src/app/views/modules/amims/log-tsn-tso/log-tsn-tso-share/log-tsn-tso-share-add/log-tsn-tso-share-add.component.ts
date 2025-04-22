import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsLogTsnTsoFormSchema } from 'de-sdk-core/form-schema/amims-log-tsn-tso.form-schema'; 
import type  { AmimsLogTsnTsoDto } from 'de-sdk-core/models';
import { LogTsnTsoService } from 'de-sdk-core/services';

import { PartService } from 'de-sdk-core/services';
import { TechLogService } from 'de-sdk-core/services';

@Component({
    selector: 'app-log-tsn-tso-share-add',
    templateUrl: './log-tsn-tso-share-add.component.html',
    styleUrl: './log-tsn-tso-share-add.component.scss'
})
export class LogTsnTsoShareAddComponent {
    @Input('logTsnTso') logTsnTso: AmimsLogTsnTsoDto = {
  idLogTsnTso: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.logTsnTso && this.logTsnTso.idLogTsnTso) {
        this.form?.patchValue(this.logTsnTso);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private logTsnTsoService: LogTsnTsoService,
                        private partService: PartService,
                private techLogService: TechLogService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsLogTsnTsoFormSchema, {
            kodeLogTsnTso: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'LogTsnTso');

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
        const labelMap = extractLabels(AmimsLogTsnTsoFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.logTsnTso.idLogTsnTso ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.logTsnTsoService.logTsnTsoControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data logTsnTso berhasil disimpan.');
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
        this.logTsnTsoService.logTsnTsoControllerUpdate({ id: this.logTsnTso.idLogTsnTso, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data logTsnTso berhasil diperbarui.');
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
