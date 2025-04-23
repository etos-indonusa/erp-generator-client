import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsQaRpdFormSchema } from 'de-sdk-core';
import type { AmimsQaRpdDto } from 'de-sdk-core';
import { QaRpdService, UsersService } from 'de-sdk-core';


@Component({
    selector: 'app-qa-rpd-share-add',
    templateUrl: './qa-rpd-share-add.component.html',
    styleUrl: './qa-rpd-share-add.component.scss'
})
export class QaRpdShareAddComponent {
    @Input('qaRpd') qaRpd: AmimsQaRpdDto = {
        idQaRpd: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.qaRpd && this.qaRpd.idQaRpd) {
            this.form?.patchValue(this.qaRpd);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private qaRpdService: QaRpdService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsQaRpdFormSchema, {
            kodeQaRpd: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'QaRpd');

        this.getAllUserQa();
    }

    listUserQa: any[] = [];


    // untuk fungsi get ALL relation
    getAllUserQa() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserQa = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsQaRpdFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.qaRpd.idQaRpd ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.qaRpdService.qaRpdControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data qaRpd berhasil disimpan.');
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
        this.qaRpdService.qaRpdControllerUpdate({ id: this.qaRpd.idQaRpd, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data qaRpd berhasil diperbarui.');
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
