import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsPartAtaFormSchema } from 'de-sdk-core'; 
import type  { AmimsPartAtaDto } from 'de-sdk-core';
import { PartAtaService } from 'de-sdk-core';

import { AtaService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';

@Component({
    selector: 'app-part-ata-share-add',
    templateUrl: './part-ata-share-add.component.html',
    styleUrl: './part-ata-share-add.component.scss'
})
export class PartAtaShareAddComponent {
    @Input('partAta') partAta: AmimsPartAtaDto = {
  idPartAta: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.partAta && this.partAta.idPartAta) {
        this.form?.patchValue(this.partAta);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private partAtaService: PartAtaService,
                        private ataService: AtaService,
                private mpartService: MpartService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsPartAtaFormSchema, {
            kodePartAta: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'PartAta');

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
        const labelMap = extractLabels(AmimsPartAtaFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.partAta.idPartAta ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.partAtaService.partAtaControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partAta berhasil disimpan.');
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
        this.partAtaService.partAtaControllerUpdate({ id: this.partAta.idPartAta, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data partAta berhasil diperbarui.');
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
