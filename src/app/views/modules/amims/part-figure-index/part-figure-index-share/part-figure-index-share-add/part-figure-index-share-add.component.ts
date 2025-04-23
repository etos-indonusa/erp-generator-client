import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPartFigureIndexFormSchema } from 'de-sdk-core/lib/form-schema/amims-part-figure-index.form-schema'; 
import type  { AmimsPartFigureIndexDto } from 'de-sdk-core/lib/models';
import { PartFigureIndexService } from 'de-sdk-core/lib/services';

import { AtaService } from 'de-sdk-core/lib/services';
import { MpartService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-part-figure-index-share-add',
    templateUrl: './part-figure-index-share-add.component.html',
    styleUrl: './part-figure-index-share-add.component.scss'
})
export class PartFigureIndexShareAddComponent {
    @Input('partFigureIndex') partFigureIndex: AmimsPartFigureIndexDto = {
  idPartFigureIndex: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.partFigureIndex && this.partFigureIndex.idPartFigureIndex) {
        this.form?.patchValue(this.partFigureIndex);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private partFigureIndexService: PartFigureIndexService,
                        private ataService: AtaService,
                private mpartService: MpartService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPartFigureIndexFormSchema, {
            kodePartFigureIndex: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PartFigureIndex');

                            this.getAllAta();
                    this.getAllMpart();
                    }
    
    listAta: any[] = [];
    
    listMpart: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllAta() {
    this.ataService.ataControllerFindAll().subscribe(
      data => this.listAta = data.data ?? []
    );
  }
        getAllMpart() {
    this.mpartService.mpartControllerFindAll().subscribe(
      data => this.listMpart = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsPartFigureIndexFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.partFigureIndex.idPartFigureIndex ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.partFigureIndexService.partFigureIndexControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partFigureIndex berhasil disimpan.');
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
        this.partFigureIndexService.partFigureIndexControllerUpdate({ id: this.partFigureIndex.idPartFigureIndex, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partFigureIndex berhasil diperbarui.');
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
