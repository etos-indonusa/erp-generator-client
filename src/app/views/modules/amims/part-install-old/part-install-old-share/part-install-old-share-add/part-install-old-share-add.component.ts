import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPartInstallOldFormSchema } from 'de-sdk-core'; 
import type  { AmimsPartInstallOldDto } from 'de-sdk-core';
import { PartInstallOldService } from 'de-sdk-core';

import { AircraftService } from 'de-sdk-core';
import { EngineerPrisItemService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { PartInstallService } from 'de-sdk-core';

@Component({
    selector: 'app-part-install-old-share-add',
    templateUrl: './part-install-old-share-add.component.html',
    styleUrl: './part-install-old-share-add.component.scss'
})
export class PartInstallOldShareAddComponent {
    @Input('partInstallOld') partInstallOld: AmimsPartInstallOldDto = {
  idPartInstallOld: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.partInstallOld && this.partInstallOld.idPartInstallOld) {
        this.form?.patchValue(this.partInstallOld);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private partInstallOldService: PartInstallOldService,
                        private aircraftService: AircraftService,
                private engineerPrisItemService: EngineerPrisItemService,
                private partService: PartService,
                private partInstallService: PartInstallService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPartInstallOldFormSchema, {
            kodePartInstallOld: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PartInstallOld');

                            this.getAllAircraft();
                    this.getAllEngineerPrisItem();
                    this.getAllPart();
                    this.getAllPartInstall();
                    }
    
    listAircraft: any[] = [];
    
    listEngineerPrisItem: any[] = [];
    
    listPart: any[] = [];
    
    listPartInstall: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllAircraft() {
    this.aircraftService.aircraftControllerFindAll().subscribe(
      data => this.listAircraft = data.data ?? []
    );
  }
        getAllEngineerPrisItem() {
    this.engineerPrisItemService.engineerPrisItemControllerFindAll().subscribe(
      data => this.listEngineerPrisItem = data.data ?? []
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
        
    submit(): void {
        const labelMap = extractLabels(AmimsPartInstallOldFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.partInstallOld.idPartInstallOld ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.partInstallOldService.partInstallOldControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partInstallOld berhasil disimpan.');
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
        this.partInstallOldService.partInstallOldControllerUpdate({ id: this.partInstallOld.idPartInstallOld, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partInstallOld berhasil diperbarui.');
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
