import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsLogSpFormSchema } from 'de-sdk-core/form-schema/amims-log-sp.form-schema'; 
import type  { AmimsLogSpDto } from 'de-sdk-core/models';
import { LogSpService } from 'de-sdk-core/services';


@Component({
    selector: 'app-log-sp-share-add',
    templateUrl: './log-sp-share-add.component.html',
    styleUrl: './log-sp-share-add.component.scss'
})
export class LogSpShareAddComponent {
    @Input('logSp') logSp: AmimsLogSpDto = {
  idLogSp: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.logSp && this.logSp.idLogSp) {
        this.form?.patchValue(this.logSp);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private logSpService: LogSpService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsLogSpFormSchema, {
            kodeLogSp: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'LogSp');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsLogSpFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.logSp.idLogSp ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.logSpService.logSpControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data logSp berhasil disimpan.');
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
        this.logSpService.logSpControllerUpdate({ id: this.logSp.idLogSp, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data logSp berhasil diperbarui.');
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
