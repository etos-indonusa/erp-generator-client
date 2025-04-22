import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsTechDefectFormSchema } from 'de-sdk-core/form-schema/amims-tech-defect.form-schema'; 
import type  { AmimsTechDefectDto } from 'de-sdk-core/models';
import { TechDefectService } from 'de-sdk-core/services';

import { AircraftService } from 'de-sdk-core/services';
import { EngineerRtiService } from 'de-sdk-core/services';
import { PartService } from 'de-sdk-core/services';
import { PartInstallService } from 'de-sdk-core/services';
import { TechLogService } from 'de-sdk-core/services';

@Component({
    selector: 'app-tech-defect-share-add',
    templateUrl: './tech-defect-share-add.component.html',
    styleUrl: './tech-defect-share-add.component.scss'
})
export class TechDefectShareAddComponent {
    @Input('techDefect') techDefect: AmimsTechDefectDto = {
  idTechDefect: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.techDefect && this.techDefect.idTechDefect) {
        this.form?.patchValue(this.techDefect);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private techDefectService: TechDefectService,
                        private aircraftService: AircraftService,
                private engineerRtiService: EngineerRtiService,
                private partService: PartService,
                private partInstallService: PartInstallService,
                private techLogService: TechLogService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsTechDefectFormSchema, {
            kodeTechDefect: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'TechDefect');

                            this.getAllAircraft();
                    this.getAllEngineerRti();
                    this.getAllPart();
                    this.getAllPartInstall();
                    this.getAllTechLog();
                    }
    
    listAircraft: any[] = [];
    
    listEngineerRti: any[] = [];
    
    listPart: any[] = [];
    
    listPartInstall: any[] = [];
    
    listTechLog: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllAircraft() {
    this.aircraftService.aircraftControllerFindAll().subscribe(
      data => this.listAircraft = data.data ?? []
    );
  }
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
        getAllTechLog() {
    this.techLogService.techLogControllerFindAll().subscribe(
      data => this.listTechLog = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsTechDefectFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.techDefect.idTechDefect ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.techDefectService.techDefectControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techDefect berhasil disimpan.');
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
        this.techDefectService.techDefectControllerUpdate({ id: this.techDefect.idTechDefect, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techDefect berhasil diperbarui.');
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
