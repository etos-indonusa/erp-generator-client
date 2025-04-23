import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsLifeTimeLimitFormSchema } from 'de-sdk-core'; 
import type  { AmimsLifeTimeLimitDto } from 'de-sdk-core';
import { LifeTimeLimitService } from 'de-sdk-core';


@Component({
    selector: 'app-life-time-limit-share-add',
    templateUrl: './life-time-limit-share-add.component.html',
    styleUrl: './life-time-limit-share-add.component.scss'
})
export class LifeTimeLimitShareAddComponent {
    @Input('lifeTimeLimit') lifeTimeLimit: AmimsLifeTimeLimitDto = {
  idLifeTimeLimit: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.lifeTimeLimit && this.lifeTimeLimit.idLifeTimeLimit) {
        this.form?.patchValue(this.lifeTimeLimit);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private lifeTimeLimitService: LifeTimeLimitService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsLifeTimeLimitFormSchema, {
            kodeLifeTimeLimit: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'LifeTimeLimit');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsLifeTimeLimitFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.lifeTimeLimit.idLifeTimeLimit ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.lifeTimeLimitService.lifeTimeLimitControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data lifeTimeLimit berhasil disimpan.');
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
        this.lifeTimeLimitService.lifeTimeLimitControllerUpdate({ id: this.lifeTimeLimit.idLifeTimeLimit, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data lifeTimeLimit berhasil diperbarui.');
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
