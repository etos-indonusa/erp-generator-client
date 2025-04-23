import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsTdRefFormSchema } from 'de-sdk-core/lib/form-schema/amims-td-ref.form-schema';
import type { AmimsTdRefDto } from 'de-sdk-core/lib/models';
import { TdRefService } from 'de-sdk-core/lib/services';

import { TdService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-td-ref-share-add',
    templateUrl: './td-ref-share-add.component.html',
    styleUrl: './td-ref-share-add.component.scss'
})
export class TdRefShareAddComponent {
    @Input('tdRef') tdRef: AmimsTdRefDto = {
        idTdRef: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.tdRef && this.tdRef.idTdRef) {
            this.form?.patchValue(this.tdRef);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private tdRefService: TdRefService,
        private tdService: TdService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsTdRefFormSchema, {
            kodeTdRef: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'TdRef');

        this.getAllTd();
    }

    listTd: any[] = [];

    listTdLain: any[] = [];


    // untuk fungsi get ALL relation
    getAllTd() {
        this.tdService.tdControllerFindAll().subscribe(
            data => this.listTd = data.data ?? []
        );
    }


    submit(): void {
        const labelMap = extractLabels(AmimsTdRefFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.tdRef.idTdRef ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.tdRefService.tdRefControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data tdRef berhasil disimpan.');
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
        this.tdRefService.tdRefControllerUpdate({ id: this.tdRef.idTdRef, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data tdRef berhasil diperbarui.');
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
