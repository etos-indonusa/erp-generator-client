import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsTdDetailAcFormSchema } from 'de-sdk-core/lib/form-schema/amims-td-detail-ac.form-schema'; 
import type  { AmimsTdDetailAcDto } from 'de-sdk-core/lib/models';
import { TdDetailAcService } from 'de-sdk-core/lib/services';

import { AircraftService } from 'de-sdk-core/lib/services';
import { TdDetailService } from 'de-sdk-core/lib/services';
import { TechLogService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-td-detail-ac-share-add',
    templateUrl: './td-detail-ac-share-add.component.html',
    styleUrl: './td-detail-ac-share-add.component.scss'
})
export class TdDetailAcShareAddComponent {
    @Input('tdDetailAc') tdDetailAc: AmimsTdDetailAcDto = {
  idTdDetailAc: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.tdDetailAc && this.tdDetailAc.idTdDetailAc) {
        this.form?.patchValue(this.tdDetailAc);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private tdDetailAcService: TdDetailAcService,
                        private aircraftService: AircraftService,
                private tdDetailService: TdDetailService,
                private techLogService: TechLogService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsTdDetailAcFormSchema, {
            kodeTdDetailAc: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'TdDetailAc');

                            this.getAllAircraft();
                    this.getAllTdDetail();
                    this.getAllTechLog();
                    }
    
    listAircraft: any[] = [];
    
    listTdDetail: any[] = [];
    
    listTechLog: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllAircraft() {
    this.aircraftService.aircraftControllerFindAll().subscribe(
      data => this.listAircraft = data.data ?? []
    );
  }
        getAllTdDetail() {
    this.tdDetailService.tdDetailControllerFindAll().subscribe(
      data => this.listTdDetail = data.data ?? []
    );
  }
        getAllTechLog() {
    this.techLogService.techLogControllerFindAll().subscribe(
      data => this.listTechLog = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsTdDetailAcFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.tdDetailAc.idTdDetailAc ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.tdDetailAcService.tdDetailAcControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data tdDetailAc berhasil disimpan.');
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
        this.tdDetailAcService.tdDetailAcControllerUpdate({ id: this.tdDetailAc.idTdDetailAc, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data tdDetailAc berhasil diperbarui.');
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
