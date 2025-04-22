import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsFigureIndexFormSchema } from 'de-sdk-core/form-schema/amims-figure-index.form-schema'; 
import type { AmimsFigureIndexDto } from 'de-sdk-core/models';
import { FigureIndexService } from 'de-sdk-core/services';

import { AtaService } from 'de-sdk-core/services';
 
@Component({
    selector: 'app-figure-index-share-add',
    templateUrl: './figure-index-share-add.component.html',
    styleUrl: './figure-index-share-add.component.scss'
})
export class FigureIndexShareAddComponent {
    @Input('figureIndex') figureIndex: AmimsFigureIndexDto = {
  idFigureIndex: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.figureIndex && this.figureIndex.idFigureIndex) {
        this.form?.patchValue(this.figureIndex);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private figureIndexService: FigureIndexService,
                        private ataService: AtaService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsFigureIndexFormSchema, {
            // kodeFigureIndex: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'FigureIndex');

                            this.getAllAta();
                    }
    
    listAta: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllAta() {
    this.ataService.ataControllerFindAll().subscribe(
      data => this.listAta = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsFigureIndexFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.figureIndex.idFigureIndex ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.figureIndexService.figureIndexControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data figureIndex berhasil disimpan.');
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
        this.figureIndexService.figureIndexControllerUpdate({ id: this.figureIndex.idFigureIndex, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data figureIndex berhasil diperbarui.');
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
