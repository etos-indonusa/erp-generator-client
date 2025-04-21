import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsTechDiscrepanciesFormSchema } from 'src/sdk/core/form-schema/amims-tech-discrepancies.form-schema'; 
import type  { AmimsTechDiscrepanciesDto } from 'src/sdk/core/models';
import { TechDiscrepanciesService } from 'src/sdk/core/services';

import { PartService } from 'src/sdk/core/services';
import { TechLogService } from 'src/sdk/core/services';

@Component({
    selector: 'app-tech-discrepancies-share-add',
    templateUrl: './tech-discrepancies-share-add.component.html',
    styleUrl: './tech-discrepancies-share-add.component.scss'
})
export class TechDiscrepanciesShareAddComponent {
    @Input('techDiscrepancies') techDiscrepancies: AmimsTechDiscrepanciesDto = {
  idTechDiscrepancies: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.techDiscrepancies && this.techDiscrepancies.idTechDiscrepancies) {
        this.form?.patchValue(this.techDiscrepancies);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private techDiscrepanciesService: TechDiscrepanciesService,
                        private partService: PartService,
                private techLogService: TechLogService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsTechDiscrepanciesFormSchema, {
            kodeTechDiscrepancies: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'TechDiscrepancies');

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
        const labelMap = extractLabels(AmimsTechDiscrepanciesFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.techDiscrepancies.idTechDiscrepancies ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.techDiscrepanciesService.techDiscrepanciesControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techDiscrepancies berhasil disimpan.');
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
        this.techDiscrepanciesService.techDiscrepanciesControllerUpdate({ id: this.techDiscrepancies.idTechDiscrepancies, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techDiscrepancies berhasil diperbarui.');
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
