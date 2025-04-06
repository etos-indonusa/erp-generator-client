import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { KantorFormSchema } from 'src/sdk/core/form-schema/kantor.form-schema'; 
import type  { KantorDto } from 'src/sdk/core/models';
import { KantorService } from 'src/sdk/core/services';

@Component({
    selector: 'app-kantor-share-add',
    templateUrl: './kantor-share-add.component.html',
    styleUrl: './kantor-share-add.component.scss'
})
export class KantorShareAddComponent {
    @Input('kantor') kantor: KantorDto = {
        idKantor: '',
        namaKantor: ''
    }
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.kantor && this.kantor.idKantor) {
            this.form?.patchValue(this.kantor);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private kantorService: KantorService
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, KantorFormSchema, {
            kodeKantor: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        });
    }

    submit(): void {
        const labelMap = extractLabels(KantorFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.kantor.idKantor ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.kantorService.kantorControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data kantor berhasil disimpan.');
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
        this.kantorService.kantorControllerUpdate({ id: this.kantor.idKantor, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data kantor berhasil diperbarui.');
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
