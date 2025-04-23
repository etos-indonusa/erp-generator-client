import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsEngineerRtiFormSchema } from 'de-sdk-core/lib/form-schema/amims-engineer-rti.form-schema'; 
import type  { AmimsEngineerRtiDto } from 'de-sdk-core/lib/models';
import { EngineerRtiService } from 'de-sdk-core/lib/services';

import { AircraftService } from 'de-sdk-core/lib/services';
import { MpcJoService } from 'de-sdk-core/lib/services';
import { PartService } from 'de-sdk-core/lib/services';
import { PartInstallService } from 'de-sdk-core/lib/services';
import { SiteService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-engineer-rti-share-add',
    templateUrl: './engineer-rti-share-add.component.html',
    styleUrl: './engineer-rti-share-add.component.scss'
})
export class EngineerRtiShareAddComponent {
    @Input('engineerRti') engineerRti: AmimsEngineerRtiDto = {
  idEngineerRti: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.engineerRti && this.engineerRti.idEngineerRti) {
        this.form?.patchValue(this.engineerRti);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private engineerRtiService: EngineerRtiService,
                        private aircraftService: AircraftService,
                private mpcJoService: MpcJoService,
                private partService: PartService,
                private partInstallService: PartInstallService,
                private siteService: SiteService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsEngineerRtiFormSchema, {
            kodeEngineerRti: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'EngineerRti');

                            this.getAllAircraft();
                    this.getAllMpcJo();
                    this.getAllPart();
                    this.getAllPartInstall();
                    this.getAllSite();
                    }
    
    listAircraft: any[] = [];
    
    listMpcJo: any[] = [];
    
    listPart: any[] = [];
    
    listPartInstall: any[] = [];
    
    listSite: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllAircraft() {
    this.aircraftService.aircraftControllerFindAll().subscribe(
      data => this.listAircraft = data.data ?? []
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
        getAllPartInstall() {
    this.partInstallService.partInstallControllerFindAll().subscribe(
      data => this.listPartInstall = data.data ?? []
    );
  }
        getAllSite() {
    this.siteService.siteControllerFindAll().subscribe(
      data => this.listSite = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsEngineerRtiFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.engineerRti.idEngineerRti ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.engineerRtiService.engineerRtiControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerRti berhasil disimpan.');
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
        this.engineerRtiService.engineerRtiControllerUpdate({ id: this.engineerRti.idEngineerRti, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerRti berhasil diperbarui.');
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
