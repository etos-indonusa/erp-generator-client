import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPartActypeFormSchema } from 'de-sdk-core/lib/form-schema/amims-part-actype.form-schema';
import type { AmimsPartActypeDto } from 'de-sdk-core/lib/models';
import { PartActypeService } from 'de-sdk-core/lib/services';

import { ActypeService } from 'de-sdk-core/lib/services';
import { MpartService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-part-actype-share-add',
    templateUrl: './part-actype-share-add.component.html',
    styleUrl: './part-actype-share-add.component.scss'
})
export class PartActypeShareAddComponent {
    @Input('partActype') partActype: AmimsPartActypeDto = {
        idPartActype: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.partActype && this.partActype.idPartActype) {
            this.form?.patchValue(this.partActype);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private partActypeService: PartActypeService,
        private actypeService: ActypeService,
        private mpartService: MpartService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPartActypeFormSchema, {
            kodePartActype: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'PartActype');

        this.getAllActype(); 
        this.getAllMpart();
    }

    listActype: any[] = [];

    listActypeOld: any[] = [];

    listMpart: any[] = [];


    // untuk fungsi get ALL relation
    getAllActype() {
        this.actypeService.actypeControllerFindAll().subscribe(
            data => this.listActype = data.data ?? []
        );
    }
    
    getAllMpart() {
        this.mpartService.mpartControllerFindAll().subscribe(
            data => this.listMpart = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsPartActypeFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.partActype.idPartActype ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.partActypeService.partActypeControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partActype berhasil disimpan.');
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
        this.partActypeService.partActypeControllerUpdate({ id: this.partActype.idPartActype, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partActype berhasil diperbarui.');
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
