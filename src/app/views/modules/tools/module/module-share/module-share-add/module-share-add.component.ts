import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AclModuleFormSchema } from 'de-sdk-core';
import type { AclModuleDto } from 'de-sdk-core';
import { ModuleService } from 'de-sdk-core';


@Component({
    selector: 'app-module-share-add',
    templateUrl: './module-share-add.component.html',
    styleUrl: './module-share-add.component.scss'
})
export class ModuleShareAddComponent {
    @Input('module') module: AclModuleDto = {
        idModule: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.module && this.module.idModule) {
            this.form?.patchValue(this.module);

        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private moduleService: ModuleService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AclModuleFormSchema, {
            // kodeModule: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        }, 'Module');
        
        if (this.module.idModule) {
            this.form?.patchValue(this.module);

        }
    }


    // untuk fungsi get ALL relation

    submit(): void {
        const labelMap = extractLabels(AclModuleFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.module.idModule ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.moduleService.moduleControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data module berhasil disimpan.');
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
        this.moduleService.moduleControllerUpdate({ id: this.module.idModule, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data module berhasil diperbarui.');
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
