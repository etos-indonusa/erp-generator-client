import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsLogProcessFormSchema } from 'src/sdk/core/form-schema/amims-log-process.form-schema'; 
import type  { AmimsLogProcessDto } from 'src/sdk/core/models';
import { LogProcessService } from 'src/sdk/core/services';

import { MpartService } from 'src/sdk/core/services';
import { PartService } from 'src/sdk/core/services';
import { PartInstallService } from 'src/sdk/core/services';
import { TechLogService } from 'src/sdk/core/services';

@Component({
    selector: 'app-log-process-share-add',
    templateUrl: './log-process-share-add.component.html',
    styleUrl: './log-process-share-add.component.scss'
})
export class LogProcessShareAddComponent {
    @Input('logProcess') logProcess: AmimsLogProcessDto = {
  idLogProcess: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.logProcess && this.logProcess.idLogProcess) {
        this.form?.patchValue(this.logProcess);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private logProcessService: LogProcessService,
                        private mpartService: MpartService,
                private partService: PartService,
                private partInstallService: PartInstallService,
                private techLogService: TechLogService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsLogProcessFormSchema, {
            kodeLogProcess: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'LogProcess');

                            this.getAllMpart();
                    this.getAllPart();
                    this.getAllPartInstall();
                    this.getAllTechLog();
                    }
    
    listMpart: any[] = [];
    
    listPart: any[] = [];
    
    listPartInstall: any[] = [];
    
    listTechLog: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllMpart() {
    this.mpartService.mpartControllerFindAll().subscribe(
      data => this.listMpart = data.data ?? []
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
        getAllTechLog() {
    this.techLogService.techLogControllerFindAll().subscribe(
      data => this.listTechLog = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsLogProcessFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.logProcess.idLogProcess ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.logProcessService.logProcessControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data logProcess berhasil disimpan.');
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
        this.logProcessService.logProcessControllerUpdate({ id: this.logProcess.idLogProcess, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data logProcess berhasil diperbarui.');
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
