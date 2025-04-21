import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsInspectionFormSchema } from 'src/sdk/core/form-schema/amims-inspection.form-schema'; 
import type  { AmimsInspectionDto } from 'src/sdk/core/models';
import { InspectionService } from 'src/sdk/core/services';

import { AircraftService } from 'src/sdk/core/services';
import { MaintenanceCodeService } from 'src/sdk/core/services';
import { PartService } from 'src/sdk/core/services';
import { UsersService } from 'src/sdk/core/services';

@Component({
    selector: 'app-inspection-share-add',
    templateUrl: './inspection-share-add.component.html',
    styleUrl: './inspection-share-add.component.scss'
})
export class InspectionShareAddComponent {
    @Input('inspection') inspection: AmimsInspectionDto = {
  idInspection: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.inspection && this.inspection.idInspection) {
        this.form?.patchValue(this.inspection);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private inspectionService: InspectionService,
                        private aircraftService: AircraftService,
                private maintenanceCodeService: MaintenanceCodeService,
                private partService: PartService,
                private usersService: UsersService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsInspectionFormSchema, {
            kodeInspection: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'Inspection');

                            this.getAllAircraft();
                    this.getAllMaintenanceCode();
                    this.getAllPart();
                    this.getAllUser();
                    }
    
    listAircraft: any[] = [];
    
    listMaintenanceCode: any[] = [];
    
    listPart: any[] = [];
    
    listUser: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllAircraft() {
    this.aircraftService.aircraftControllerFindAll().subscribe(
      data => this.listAircraft = data.data ?? []
    );
  }
        getAllMaintenanceCode() {
    this.maintenanceCodeService.maintenanceCodeControllerFindAll().subscribe(
      data => this.listMaintenanceCode = data.data ?? []
    );
  }
        getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        getAllUser() {
    this.usersService.usersControllerFindAll().subscribe(
      data => this.listUser = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsInspectionFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.inspection.idInspection ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.inspectionService.inspectionControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data inspection berhasil disimpan.');
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
        this.inspectionService.inspectionControllerUpdate({ id: this.inspection.idInspection, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data inspection berhasil diperbarui.');
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
