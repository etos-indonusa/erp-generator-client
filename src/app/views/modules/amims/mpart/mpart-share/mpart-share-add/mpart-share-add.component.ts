import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMpartFormSchema } from 'de-sdk-core/lib/form-schema/amims-mpart.form-schema';
import type { AmimsMpartDto } from 'de-sdk-core/lib/models';
import { MpartService } from 'de-sdk-core/lib/services';

import { AtaService } from 'de-sdk-core/lib/services';
import { ConditionMonitoringService } from 'de-sdk-core/lib/services';
import { LifeTimeLimitService } from 'de-sdk-core/lib/services';
import { PartCategoryService } from 'de-sdk-core/lib/services';
import { PartidService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-mpart-share-add',
    templateUrl: './mpart-share-add.component.html',
    styleUrl: './mpart-share-add.component.scss'
})
export class MpartShareAddComponent {
    @Input('mpart') mpart: AmimsMpartDto = {
        idMpart: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.mpart && this.mpart.idMpart) {
            this.form?.patchValue(this.mpart);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private mpartService: MpartService,
        private ataService: AtaService,
        private conditionMonitoringService: ConditionMonitoringService,
        private lifeTimeLimitService: LifeTimeLimitService,
        private partCategoryService: PartCategoryService,
        private partidService: PartidService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMpartFormSchema, {
            kodeMpart: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'Mpart');

        this.getAllAta();
        this.getAllConditionMonitoring();
        this.getAllLifeTimeLimit();
        this.getAllPartCategory();
        this.getAllPartid();
    }

    listAta: any[] = [];

    listConditionMonitoring: any[] = [];

    listGroup: any[] = [];

    listLifeTimeLimit: any[] = [];

    listPartCategory: any[] = [];

    listPartid: any[] = [];


    // untuk fungsi get ALL relation
    getAllAta() {
        this.ataService.ataControllerFindAll().subscribe(
            data => this.listAta = data.data ?? []
        );
    }
    getAllConditionMonitoring() {
        this.conditionMonitoringService.conditionMonitoringControllerFindAll().subscribe(
            data => this.listConditionMonitoring = data.data ?? []
        );
    }

    getAllLifeTimeLimit() {
        this.lifeTimeLimitService.lifeTimeLimitControllerFindAll().subscribe(
            data => this.listLifeTimeLimit = data.data ?? []
        );
    }
    getAllPartCategory() {
        this.partCategoryService.partCategoryControllerFindAll().subscribe(
            data => this.listPartCategory = data.data ?? []
        );
    }
    getAllPartid() {
        this.partidService.partidControllerFindAll().subscribe(
            data => this.listPartid = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsMpartFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.mpart.idMpart ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.mpartService.mpartControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpart berhasil disimpan.');
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
        this.mpartService.mpartControllerUpdate({ id: this.mpart.idMpart, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpart berhasil diperbarui.');
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
