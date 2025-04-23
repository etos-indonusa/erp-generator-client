import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsEngineerPrisItemFormSchema } from 'de-sdk-core';
import type { AmimsEngineerPrisItemDto } from 'de-sdk-core';
import { EngineerPrisItemService } from 'de-sdk-core';

import { EngineerPrisService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';
import { EngineerRtiService } from 'de-sdk-core';

@Component({
    selector: 'app-engineer-pris-item-share-add',
    templateUrl: './engineer-pris-item-share-add.component.html',
    styleUrl: './engineer-pris-item-share-add.component.scss'
})
export class EngineerPrisItemShareAddComponent {
    @Input('engineerPrisItem') engineerPrisItem: AmimsEngineerPrisItemDto = {
        idEngineerPrisItem: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.engineerPrisItem && this.engineerPrisItem.idEngineerPrisItem) {
            this.form?.patchValue(this.engineerPrisItem);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private engineerPrisItemService: EngineerPrisItemService,
        private engineerPrisService: EngineerPrisService,
        private partService: PartService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsEngineerPrisItemFormSchema, {
            kodeEngineerPrisItem: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'EngineerPrisItem');

        this.getAllEngineerPris();
        this.getAllPart(); 
    }

    listEngineerPris: any[] = [];

    listPart: any[] = [];

    listPartRemove: any[] = [];


    // untuk fungsi get ALL relation
    getAllEngineerPris() {
        this.engineerPrisService.engineerPrisControllerFindAll().subscribe(
            data => this.listEngineerPris = data.data ?? []
        );
    }
    getAllPart() {
        this.partService.partControllerFindAll().subscribe(
            data => this.listPart = data.data ?? []
        );
    }


    submit(): void {
        const labelMap = extractLabels(AmimsEngineerPrisItemFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.engineerPrisItem.idEngineerPrisItem ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.engineerPrisItemService.engineerPrisItemControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerPrisItem berhasil disimpan.');
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
        this.engineerPrisItemService.engineerPrisItemControllerUpdate({ id: this.engineerPrisItem.idEngineerPrisItem, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data engineerPrisItem berhasil diperbarui.');
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
