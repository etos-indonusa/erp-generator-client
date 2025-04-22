import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsLastMaintenanceFormSchema } from 'de-sdk-core/form-schema/amims-last-maintenance.form-schema'; 
import type  { AmimsLastMaintenanceDto } from 'de-sdk-core/models';
import { LastMaintenanceService } from 'de-sdk-core/services';

import { MaintenanceService } from 'de-sdk-core/services';
import { MpcJoService } from 'de-sdk-core/services';
import { PartService } from 'de-sdk-core/services';
import { UsersService } from 'de-sdk-core/services';

@Component({
    selector: 'app-last-maintenance-share-add',
    templateUrl: './last-maintenance-share-add.component.html',
    styleUrl: './last-maintenance-share-add.component.scss'
})
export class LastMaintenanceShareAddComponent {
    @Input('lastMaintenance') lastMaintenance: AmimsLastMaintenanceDto = {
  idLastMaintenance: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.lastMaintenance && this.lastMaintenance.idLastMaintenance) {
        this.form?.patchValue(this.lastMaintenance);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private lastMaintenanceService: LastMaintenanceService,
                        private maintenanceService: MaintenanceService,
                private mpcJoService: MpcJoService,
                private partService: PartService,
                private usersService: UsersService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsLastMaintenanceFormSchema, {
            kodeLastMaintenance: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'LastMaintenance');

                            this.getAllMaintenance();
                    this.getAllMpcJo();
                    this.getAllPart();
                    this.getAllUser();
                    }
    
    listMaintenance: any[] = [];
    
    listMpcJo: any[] = [];
    
    listPart: any[] = [];
    
    listUser: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllMaintenance() {
    this.maintenanceService.maintenanceControllerFindAll().subscribe(
      data => this.listMaintenance = data.data ?? []
    );
  }
        getAllMpcJo() {
    this.mpcJoService.mpcJoControllerFindAll().subscribe(
      data => this.listMpcJo = data.data ?? []
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
        const labelMap = extractLabels(AmimsLastMaintenanceFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.lastMaintenance.idLastMaintenance ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.lastMaintenanceService.lastMaintenanceControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data lastMaintenance berhasil disimpan.');
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
        this.lastMaintenanceService.lastMaintenanceControllerUpdate({ id: this.lastMaintenance.idLastMaintenance, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data lastMaintenance berhasil diperbarui.');
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
