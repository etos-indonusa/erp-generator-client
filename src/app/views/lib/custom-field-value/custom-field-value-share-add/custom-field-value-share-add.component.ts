import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { ToolsCustomFieldValueFormSchema } from 'src/sdk/core/form-schema/tools-custom-field-value.form-schema'; 
import type  { ToolsCustomFieldValueDto } from 'src/sdk/core/models';
import { CustomFieldValueService } from 'src/sdk/core/services';

import { CustomFieldService } from 'src/sdk/core/services';
import { CustomFieldGroupService } from 'src/sdk/core/services';

@Component({
    selector: 'app-custom-field-value-share-add',
    templateUrl: './custom-field-value-share-add.component.html',
    styleUrl: './custom-field-value-share-add.component.scss'
})
export class CustomFieldValueShareAddComponent {
    @Input('customFieldValue') customFieldValue: ToolsCustomFieldValueDto = {
  idCustomField: '',
  idCustomFieldValue: '',
  modulId: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.customFieldValue && this.customFieldValue.idCustomFieldValue) {
        this.form?.patchValue(this.customFieldValue);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private customFieldValueService: CustomFieldValueService,
                        private customFieldService: CustomFieldService,
                private customFieldGroupService: CustomFieldGroupService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, ToolsCustomFieldValueFormSchema, {
            kodeCustomFieldValue: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'CustomFieldValue');

                            this.getAllCustomField();
                    this.getAllCustomFieldGroup();
                    }
    
    listCustomField: any[] = [];
    
    listCustomFieldGroup: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllCustomField() {
    this.customFieldService.customFieldControllerFindAll().subscribe(
      data => this.listCustomField = data.data ?? []
    );
  }
        getAllCustomFieldGroup() {
    this.customFieldGroupService.customFieldGroupControllerFindAll().subscribe(
      data => this.listCustomFieldGroup = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(ToolsCustomFieldValueFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.customFieldValue.idCustomFieldValue ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.customFieldValueService.customFieldValueControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data customFieldValue berhasil disimpan.');
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
        this.customFieldValueService.customFieldValueControllerUpdate({ id: this.customFieldValue.idCustomFieldValue, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data customFieldValue berhasil diperbarui.');
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
