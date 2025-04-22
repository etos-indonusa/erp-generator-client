import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsLibUploadFormSchema } from 'de-sdk-core/form-schema/amims-lib-upload.form-schema'; 
import type { AmimsLibUploadDto } from 'de-sdk-core/models';
import { LibUploadService } from 'de-sdk-core/services';

import { ModuleService } from 'de-sdk-core/services';
 
@Component({
    selector: 'app-lib-upload-share-add',
    templateUrl: './lib-upload-share-add.component.html',
    styleUrl: './lib-upload-share-add.component.scss'
})
export class LibUploadShareAddComponent {
    @Input('libUpload') libUpload: AmimsLibUploadDto = {
  idLibUpload: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.libUpload && this.libUpload.idLibUpload) {
        this.form?.patchValue(this.libUpload);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private libUploadService: LibUploadService,
                        private moduleService: ModuleService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsLibUploadFormSchema, {
            // kodeLibUpload: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'LibUpload');

                            this.getAllModule();
                    }
    
    listModule: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllModule() {
    this.moduleService.moduleControllerFindAll().subscribe(
      data => this.listModule = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsLibUploadFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.libUpload.idLibUpload ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.libUploadService.libUploadControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data libUpload berhasil disimpan.');
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
        this.libUploadService.libUploadControllerUpdate({ id: this.libUpload.idLibUpload, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data libUpload berhasil diperbarui.');
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
