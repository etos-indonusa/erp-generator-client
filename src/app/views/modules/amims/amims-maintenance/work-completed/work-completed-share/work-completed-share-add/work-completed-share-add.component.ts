import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsWorkCompletedFormSchema } from 'de-sdk-core'; 
import type  { AmimsWorkCompletedDto } from 'de-sdk-core';
import { WorkCompletedService } from 'de-sdk-core';

import { AircraftService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';

@Component({
    selector: 'app-work-completed-share-add',
    templateUrl: './work-completed-share-add.component.html',
    styleUrl: './work-completed-share-add.component.scss'
})
export class WorkCompletedShareAddComponent {
    @Input('workCompleted') workCompleted: AmimsWorkCompletedDto = {
  completionDate: '',
  idAircraft: '',
  idWorkCompleted: '',
  workCompletedNumber: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.workCompleted && this.workCompleted.idWorkCompleted) {
        this.form?.patchValue(this.workCompleted);
        }
    }
    constructor(
        private cd: ChangeDetectorRef,
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private workCompletedService: WorkCompletedService,
                        private aircraftService: AircraftService,
                private partService: PartService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsWorkCompletedFormSchema, {
            kodeWorkCompleted: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'WorkCompleted');

                            this.getAllAircraft();
                    this.getAllPart();
                    }
    
    listAircraft: any[] = [];
    
    listPart: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllAircraft() {
    this.aircraftService.aircraftControllerFindAll().subscribe(
      data => this.listAircraft = data.data ?? []
    );
  }
        getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsWorkCompletedFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.workCompleted.idWorkCompleted ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.workCompletedService.workCompletedControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data workCompleted berhasil disimpan.');
                this.nzDrawerRef.close(data);
            },
            error: (e) => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat menyimpan.' + e?.error?.error);
            },
            complete: () => (this.is_loading = false)
        });
    }

    update() {
        this.is_loading = true;
        this.workCompletedService.workCompletedControllerUpdate({ id: this.workCompleted.idWorkCompleted, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data workCompleted berhasil diperbarui.');
                this.nzDrawerRef.close(data);
                this.cd.detectChanges()
            },
            error: (e) => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat menyimpan.' + e?.error?.error);
            },
            complete: () => (this.is_loading = false)
        });
    }

    goToBack(data = null) {
        this.nzDrawerRef.close(data);
    }
}
