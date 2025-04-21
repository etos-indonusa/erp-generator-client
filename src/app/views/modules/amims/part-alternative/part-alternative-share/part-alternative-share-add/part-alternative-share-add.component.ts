import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPartAlternativeFormSchema } from 'src/sdk/core/form-schema/amims-part-alternative.form-schema'; 
import type  { AmimsPartAlternativeDto } from 'src/sdk/core/models';
import { PartAlternativeService } from 'src/sdk/core/services';

import { MpartService } from 'src/sdk/core/services';

@Component({
    selector: 'app-part-alternative-share-add',
    templateUrl: './part-alternative-share-add.component.html',
    styleUrl: './part-alternative-share-add.component.scss'
})
export class PartAlternativeShareAddComponent {
    @Input('partAlternative') partAlternative: AmimsPartAlternativeDto = {
  idPartAlternative: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.partAlternative && this.partAlternative.idPartAlternative) {
        this.form?.patchValue(this.partAlternative);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private partAlternativeService: PartAlternativeService,
                        private mpartService: MpartService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPartAlternativeFormSchema, {
            kodePartAlternative: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PartAlternative');

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
        const labelMap = extractLabels(AmimsPartAlternativeFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.partAlternative.idPartAlternative ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.partAlternativeService.partAlternativeControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partAlternative berhasil disimpan.');
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
        this.partAlternativeService.partAlternativeControllerUpdate({ id: this.partAlternative.idPartAlternative, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partAlternative berhasil diperbarui.');
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
