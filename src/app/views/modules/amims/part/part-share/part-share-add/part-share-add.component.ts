import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPartFormSchema } from 'src/sdk/core/form-schema/amims-part.form-schema';
import type { AmimsPartDto } from 'src/sdk/core/models';
import { PartService } from 'src/sdk/core/services';

import { AtaService } from 'src/sdk/core/services';
import { ConditionMonitoringService } from 'src/sdk/core/services';
import { LifeTimeLimitService } from 'src/sdk/core/services';
import { PartCategoryService } from 'src/sdk/core/services';
import { PartidService } from 'src/sdk/core/services';

@Component({
    selector: 'app-part-share-add',
    templateUrl: './part-share-add.component.html',
    styleUrl: './part-share-add.component.scss'
})
export class PartShareAddComponent {
    @Input('part') part: AmimsPartDto = {
        idPart: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.part && this.part.idPart) {
            this.form?.patchValue(this.part);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private partService: PartService,
        private ataService: AtaService,
        private conditionMonitoringService: ConditionMonitoringService,
        private lifeTimeLimitService: LifeTimeLimitService,
        private partCategoryService: PartCategoryService,
        private partidService: PartidService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPartFormSchema, {
            kodePart: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'Part');

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
        const labelMap = extractLabels(AmimsPartFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.part.idPart ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.partService.partControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data part berhasil disimpan.');
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
        this.partService.partControllerUpdate({ id: this.part.idPart, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data part berhasil diperbarui.');
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
