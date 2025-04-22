import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPartLogFormSchema } from 'de-sdk-core/form-schema/amims-part-log.form-schema'; 
import type  { AmimsPartLogDto } from 'de-sdk-core/models';
import { PartLogService } from 'de-sdk-core/services';

import { ModuleService } from 'de-sdk-core/services';
import { PartService } from 'de-sdk-core/services';
import { PositionService } from 'de-sdk-core/services';
import { SiteService } from 'de-sdk-core/services';
import { UsersService } from 'de-sdk-core/services';

@Component({
    selector: 'app-part-log-share-add',
    templateUrl: './part-log-share-add.component.html',
    styleUrl: './part-log-share-add.component.scss'
})
export class PartLogShareAddComponent {
    @Input('partLog') partLog: AmimsPartLogDto = {
  idPartLog: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.partLog && this.partLog.idPartLog) {
        this.form?.patchValue(this.partLog);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private partLogService: PartLogService,
                        private moduleService: ModuleService,
                private partService: PartService,
                private positionService: PositionService,
                private siteService: SiteService,
                private usersService: UsersService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPartLogFormSchema, {
            kodePartLog: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PartLog');

                            this.getAllModule();
                    this.getAllPart();
                    this.getAllPosition();
                    this.getAllSite();
                    this.getAllUser();
                    }
    
    listModule: any[] = [];
    
    listPart: any[] = [];
    
    listPosition: any[] = [];
    
    listSite: any[] = [];
    
    listUser: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllModule() {
    this.moduleService.moduleControllerFindAll().subscribe(
      data => this.listModule = data.data ?? []
    );
  }
        getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        getAllPosition() {
    this.positionService.positionControllerFindAll().subscribe(
      data => this.listPosition = data.data ?? []
    );
  }
        getAllSite() {
    this.siteService.siteControllerFindAll().subscribe(
      data => this.listSite = data.data ?? []
    );
  }
        getAllUser() {
    this.usersService.usersControllerFindAll().subscribe(
      data => this.listUser = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsPartLogFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.partLog.idPartLog ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.partLogService.partLogControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partLog berhasil disimpan.');
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
        this.partLogService.partLogControllerUpdate({ id: this.partLog.idPartLog, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partLog berhasil diperbarui.');
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
