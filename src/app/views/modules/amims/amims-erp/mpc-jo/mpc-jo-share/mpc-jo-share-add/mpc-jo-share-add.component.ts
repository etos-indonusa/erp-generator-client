import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMpcJoFormSchema } from 'de-sdk-core';
import type { AmimsMpcJoDto } from 'de-sdk-core';
import { MpcJoService } from 'de-sdk-core';

import { MaintenanceService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { TechLogService } from 'de-sdk-core';
import { TypeOfworkService } from 'de-sdk-core';
import { UsersService } from 'de-sdk-core';

@Component({
    selector: 'app-mpc-jo-share-add',
    templateUrl: './mpc-jo-share-add.component.html',
    styleUrl: './mpc-jo-share-add.component.scss'
})
export class MpcJoShareAddComponent {
    @Input('mpcJo') mpcJo: AmimsMpcJoDto = {
        idMpcJo: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.mpcJo && this.mpcJo.idMpcJo) {
            this.form?.patchValue(this.mpcJo);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private mpcJoService: MpcJoService,
        private maintenanceService: MaintenanceService,
        private partService: PartService,
        private techLogService: TechLogService,
        private typeOfworkService: TypeOfworkService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMpcJoFormSchema, {
            kodeMpcJo: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'MpcJo');
 
        this.getAllMaintenance();
        this.getAllPart();
        this.getAllTechLog();
        this.getAllTypeOfwork();
        this.getAllUser();
    }

    listDueList: any[] = [];

    listMaintenance: any[] = [];

    listPart: any[] = [];

    listTechLog: any[] = [];

    listTypeOfwork: any[] = [];

    listUser: any[] = [];


    // untuk fungsi get ALL relation
  
    getAllMaintenance() {
        this.maintenanceService.maintenanceControllerFindAll().subscribe(
            data => this.listMaintenance = data.data ?? []
        );
    }
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
    getAllTypeOfwork() {
        this.typeOfworkService.typeOfworkControllerFindAll().subscribe(
            data => this.listTypeOfwork = data.data ?? []
        );
    }
    getAllUser() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUser = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsMpcJoFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.mpcJo.idMpcJo ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.mpcJoService.mpcJoControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpcJo berhasil disimpan.');
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
        this.mpcJoService.mpcJoControllerUpdate({ id: this.mpcJo.idMpcJo, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpcJo berhasil diperbarui.');
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
