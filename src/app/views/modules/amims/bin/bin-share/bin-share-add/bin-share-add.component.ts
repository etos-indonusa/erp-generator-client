import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsBinFormSchema } from 'de-sdk-core/form-schema/amims-bin.form-schema'; 
import type  { AmimsBinDto } from 'de-sdk-core/models';
import { BinService } from 'de-sdk-core/services';

import { SiteService } from 'de-sdk-core/services';

@Component({
    selector: 'app-bin-share-add',
    templateUrl: './bin-share-add.component.html',
    styleUrl: './bin-share-add.component.scss'
})
export class BinShareAddComponent {
    @Input('bin') bin: AmimsBinDto = {
  idBin: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.bin && this.bin.idBin) {
        this.form?.patchValue(this.bin);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private binService: BinService,
                        private siteService: SiteService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsBinFormSchema, {
            kodeBin: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'Bin');

                            this.getAllSite();
                    }
    
    listSite: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllSite() {
    this.siteService.siteControllerFindAll().subscribe(
      data => this.listSite = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsBinFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.bin.idBin ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.binService.binControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data bin berhasil disimpan.');
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
        this.binService.binControllerUpdate({ id: this.bin.idBin, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data bin berhasil diperbarui.');
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
