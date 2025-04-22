import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsDueListOutputFormSchema } from 'de-sdk-core/form-schema/amims-due-list-output.form-schema'; 
import type  { AmimsDueListOutputDto } from 'de-sdk-core/models';
import { DueListOutputService } from 'de-sdk-core/services';

import { AircraftService } from 'de-sdk-core/services';
import { DueListService } from 'de-sdk-core/services';
import { MpartService } from 'de-sdk-core/services';
import { PartService } from 'de-sdk-core/services';

@Component({
    selector: 'app-due-list-output-share-add',
    templateUrl: './due-list-output-share-add.component.html',
    styleUrl: './due-list-output-share-add.component.scss'
})
export class DueListOutputShareAddComponent {
    @Input('dueListOutput') dueListOutput: AmimsDueListOutputDto = {
  idDueListOutput: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.dueListOutput && this.dueListOutput.idDueListOutput) {
        this.form?.patchValue(this.dueListOutput);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private dueListOutputService: DueListOutputService,
                        private aircraftService: AircraftService,
                private dueListService: DueListService,
                private mpartService: MpartService,
                private partService: PartService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsDueListOutputFormSchema, {
            kodeDueListOutput: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'DueListOutput');

                            this.getAllAircraft();
                    this.getAllDueList();
                    this.getAllMpart();
                    this.getAllPart();
                    }
    
    listAircraft: any[] = [];
    
    listDueList: any[] = [];
    
    listMpart: any[] = [];
    
    listPart: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllAircraft() {
    this.aircraftService.aircraftControllerFindAll().subscribe(
      data => this.listAircraft = data.data ?? []
    );
  }
        getAllDueList() {
    this.dueListService.dueListControllerFindAll().subscribe(
      data => this.listDueList = data.data ?? []
    );
  }
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
        
    submit(): void {
        const labelMap = extractLabels(AmimsDueListOutputFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.dueListOutput.idDueListOutput ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.dueListOutputService.dueListOutputControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data dueListOutput berhasil disimpan.');
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
        this.dueListOutputService.dueListOutputControllerUpdate({ id: this.dueListOutput.idDueListOutput, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data dueListOutput berhasil diperbarui.');
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
