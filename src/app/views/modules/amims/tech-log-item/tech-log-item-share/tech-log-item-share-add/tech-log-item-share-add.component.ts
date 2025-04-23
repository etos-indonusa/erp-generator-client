import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsTechLogItemFormSchema } from 'de-sdk-core/lib/form-schema/amims-tech-log-item.form-schema';
import type { AmimsTechLogItemDto } from 'de-sdk-core/lib/models';
import { TechLogItemService, UsersService } from 'de-sdk-core/lib/services';

import { TechLogService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-tech-log-item-share-add',
    templateUrl: './tech-log-item-share-add.component.html',
    styleUrl: './tech-log-item-share-add.component.scss'
})
export class TechLogItemShareAddComponent {
    @Input('techLogItem') techLogItem: AmimsTechLogItemDto = {
        idTechLogItem: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.techLogItem && this.techLogItem.idTechLogItem) {
            this.form?.patchValue(this.techLogItem);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private techLogItemService: TechLogItemService,
        private usersService: UsersService,
        private techLogService: TechLogService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsTechLogItemFormSchema, {
            kodeTechLogItem: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'TechLogItem');

        this.getAllCaptain();
        this.getAllTechLog();
    }

    listCaptain: any[] = [];

    listTechLog: any[] = [];


    // untuk fungsi get ALL relation
    getAllCaptain() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listCaptain = data.data ?? []
        );
    }
    getAllTechLog() {
        this.techLogService.techLogControllerFindAll().subscribe(
            data => this.listTechLog = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsTechLogItemFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.techLogItem.idTechLogItem ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.techLogItemService.techLogItemControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techLogItem berhasil disimpan.');
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
        this.techLogItemService.techLogItemControllerUpdate({ id: this.techLogItem.idTechLogItem, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data techLogItem berhasil diperbarui.');
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
