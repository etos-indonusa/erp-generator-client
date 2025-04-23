import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsRotaryFactorFormSchema } from 'de-sdk-core/lib/form-schema/amims-rotary-factor.form-schema'; 
import type  { AmimsRotaryFactorDto } from 'de-sdk-core/lib/models';
import { RotaryFactorService } from 'de-sdk-core/lib/services';

import { MpartService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-rotary-factor-share-add',
    templateUrl: './rotary-factor-share-add.component.html',
    styleUrl: './rotary-factor-share-add.component.scss'
})
export class RotaryFactorShareAddComponent {
    @Input('rotaryFactor') rotaryFactor: AmimsRotaryFactorDto = {
  idRotaryFactor: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.rotaryFactor && this.rotaryFactor.idRotaryFactor) {
        this.form?.patchValue(this.rotaryFactor);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private rotaryFactorService: RotaryFactorService,
                        private mpartService: MpartService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsRotaryFactorFormSchema, {
            kodeRotaryFactor: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'RotaryFactor');

                            this.getAllMpart();
                    }
    
    listMpart: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllMpart() {
    this.mpartService.mpartControllerFindAll().subscribe(
      data => this.listMpart = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsRotaryFactorFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.rotaryFactor.idRotaryFactor ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.rotaryFactorService.rotaryFactorControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data rotaryFactor berhasil disimpan.');
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
        this.rotaryFactorService.rotaryFactorControllerUpdate({ id: this.rotaryFactor.idRotaryFactor, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data rotaryFactor berhasil diperbarui.');
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
