import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPartInstallFormSchema } from 'de-sdk-core'; 
import type  { AmimsPartInstallDto } from 'de-sdk-core';
import { PartInstallService } from 'de-sdk-core';

import { AircraftService } from 'de-sdk-core';
import { EngineerPrisItemService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';

@Component({
    selector: 'app-part-install-share-add',
    templateUrl: './part-install-share-add.component.html',
    styleUrl: './part-install-share-add.component.scss'
})
export class PartInstallShareAddComponent {
    @Input('partInstall') partInstall: AmimsPartInstallDto = {
  idPartInstall: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.partInstall && this.partInstall.idPartInstall) {
        this.form?.patchValue(this.partInstall);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private partInstallService: PartInstallService,
                        private aircraftService: AircraftService,
                private engineerPrisItemService: EngineerPrisItemService,
                private partService: PartService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPartInstallFormSchema, {
            kodePartInstall: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PartInstall');

                            this.getAllAircraft();
                    this.getAllEngineerPrisItem();
                    this.getAllPart();
                    }
    
    listAircraft: any[] = [];
    
    listEngineerPrisItem: any[] = [];
    
    listPart: any[] = [];
    

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
        
    submit(): void {
        const labelMap = extractLabels(AmimsPartInstallFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.partInstall.idPartInstall ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.partInstallService.partInstallControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partInstall berhasil disimpan.');
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
        this.partInstallService.partInstallControllerUpdate({ id: this.partInstall.idPartInstall, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partInstall berhasil diperbarui.');
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
