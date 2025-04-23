import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { ToolsCustomFieldFormSchema } from 'de-sdk-core/lib/form-schema/tools-custom-field.form-schema';
import type { ToolsCustomFieldDto } from 'de-sdk-core/lib/models';
import { CustomFieldService } from 'de-sdk-core/lib/services';

import { CustomFieldGroupService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-custom-field-share-add',
    templateUrl: './custom-field-share-add.component.html',
    styleUrl: './custom-field-share-add.component.scss'
})
export class CustomFieldShareAddComponent {
    @Input('customField') customField: ToolsCustomFieldDto = {
        idCustomField: '',
        kodeField: '',
        labelField: '',
        tipeField: ''
    };
    @Input() idCustomFieldGroup?: any = null;
    listCustomFieldGroup: any[] = [];
    tipeFieldList = ['text', 'number', 'date', 'select', 'checkbox'];
    get showOpsi() {
        return this.form.value.tipeField === 'select';
    }

    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        
 
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private customFieldService: CustomFieldService,
        private customFieldGroupService: CustomFieldGroupService,
    ) { }

    private kodeFieldTouchedManually = false;
    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, ToolsCustomFieldFormSchema, {
            kodeCustomField: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'CustomField');

        if (this.customField.idCustomField) {
            this.form?.patchValue(this.customField);
        }
        
        this.form.patchValue({ idCustomFieldGroup: this.idCustomFieldGroup})
        if (this.customField?.tipeField === 'select') {
            this.loadOpsiFromForm();
        }
        this.form.get('labelField')?.valueChanges.subscribe((val: string) => {
            if (!this.kodeFieldTouchedManually && val) {
                const generated = this.toSnakeCase(val);
                this.form.get('kodeField')?.setValue(generated);
            }
        });

        this.form.get('kodeField')?.valueChanges.subscribe((val: string) => {
            this.kodeFieldTouchedManually = !!val && val !== this.toSnakeCase(this.form.get('labelField')?.value);
        });

        
    }

    toSnakeCase(str: string): string {
        return str
            .replace(/[^\w\s]/gi, '') // hapus karakter aneh
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '_');
    }
    
    submit(): void {
        const labelMap = extractLabels(ToolsCustomFieldFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.customField.idCustomField ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.customFieldService.customFieldControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data customField berhasil disimpan.');
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
        this.customFieldService.customFieldControllerUpdate({ id: this.customField.idCustomField, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data customField berhasil diperbarui.');
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


    // SELCT  
    opsiSelectList: { label: string}[] = [];

    get isSelectField(): boolean {
        return this.form.value.tipeField === 'select';
    }

    addOpsiBaru() {
        this.opsiSelectList.push({ label: '' });
        this.syncOpsiToForm();
    }
 
    hapusOpsi(i: number) {
        this.opsiSelectList.splice(i, 1);
        this.syncOpsiToForm();
    }

    syncOpsiToForm() {
        this.form.get('opsiSelect')?.setValue(JSON.stringify(this.opsiSelectList));
    }

    loadOpsiFromForm() {
        try {
            const current = this.form.get('opsiSelect')?.value;
            this.opsiSelectList = current ? JSON.parse(current) : [];
        } catch {
            this.opsiSelectList = [];
        }
    }
    // SELCT  

    // Validator 
    regexPresetList = [
        { label: 'Hanya Angka (0-9)', value: '^[0-9]+$' },
        { label: 'Email Valid', value: '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$' },
        { label: 'Huruf & Spasi', value: '^[A-Za-z\\s]+$' },
        { label: 'Minimal 6 karakter', value: '^.{6,}$' },
        { label: 'Custom...', value: '' }
    ];

    testValue = '';
    get isValidPreview(): boolean | null {
        const regexStr = this.form.get('validasi')?.value;
        try {
            if (!regexStr) return null;
            const regex = new RegExp(regexStr);
            return regex.test(this.testValue);
        } catch {
            return null;
        }
    }

    // Validator 
}
