import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsTechLogJoFormSchema } from 'de-sdk-core/lib/form-schema/amims-tech-log-jo.form-schema';
import type { AmimsTechLogJoDto } from 'de-sdk-core/lib/models';
import { TechLogJoService } from 'de-sdk-core/lib/services';

import { MpcJoService } from 'de-sdk-core/lib/services';
import { PartService } from 'de-sdk-core/lib/services';
import { TechLogService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-tech-log-jo-share-add',
    templateUrl: './tech-log-jo-share-add.component.html',
    styleUrl: './tech-log-jo-share-add.component.scss'
})
export class TechLogJoShareAddComponent {
    @Input('techLogJo') techLogJo: AmimsTechLogJoDto = {
        idTechLogJo: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.techLogJo && this.techLogJo.idTechLogJo) {
            this.form?.patchValue(this.techLogJo);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private techLogJoService: TechLogJoService,
        private mpcJoService: MpcJoService,
        private partService: PartService,
        private techLogService: TechLogService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsTechLogJoFormSchema, {
            kodeTechLogJo: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'TechLogJo');

        this.getAllMpcJo();
        this.getAllPart();
        this.getAllTechLog();
    }

    listMpcJo: any[] = [];

    listPart: any[] = [];

    listTechLog: any[] = [];

    listTechLogClose: any[] = [];


    // untuk fungsi get ALL relation
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
    getAllTechLog() {
        this.techLogService.techLogControllerFindAll().subscribe(
            data => this.listTechLog = data.data ?? []
        );
    }


    submit(): void {
        const labelMap = extractLabels(AmimsTechLogJoFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.techLogJo.idTechLogJo ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.techLogJoService.techLogJoControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techLogJo berhasil disimpan.');
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
        this.techLogJoService.techLogJoControllerUpdate({ id: this.techLogJo.idTechLogJo, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techLogJo berhasil diperbarui.');
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
