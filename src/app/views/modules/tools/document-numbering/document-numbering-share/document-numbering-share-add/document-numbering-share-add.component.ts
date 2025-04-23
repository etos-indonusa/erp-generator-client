import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { PesanService } from 'src/app/shared/services/pesan.service';
import { ToolsDocumentNumberingFormSchema } from 'de-sdk-core';
import type { ToolsDocumentNumberingDto } from 'de-sdk-core';
import { DocumentNumberingService } from 'de-sdk-core';

@Component({
    selector: 'app-document-numbering-share-add',
    templateUrl: './document-numbering-share-add.component.html',
    styleUrl: './document-numbering-share-add.component.scss'
})
export class DocumentNumberingShareAddComponent {
    @Input('for-module') for_module: string = '';
    @Input('field') field: any[] = [];
    @Input('documentNumbering') documentNumbering!: ToolsDocumentNumberingDto;
    form!: FormGroup;
    targetColumnOptions: any[] = [];

    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private pesan: PesanService,
        private nzDrawerRef: NzDrawerRef<string>,
        private documentNumberingService: DocumentNumberingService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, ToolsDocumentNumberingFormSchema, {}, 'DocumentNumbering');

        if (this.documentNumbering?.idDocumentNumbering) {
            this.form.patchValue(this.documentNumbering);
            this.triggerBuilder = this.documentNumbering.triggerStage ? JSON.parse(this.documentNumbering.triggerStage) : {
                column: '',
                on: 'new',
                value: ''
            }
        }


        this.targetColumnOptions = this.field.filter(x => x.name.includes('nomor'))
        this.form.patchValue({
            forModule: this.for_module,
            targetTable: this.parseModuleInfo(this.for_module).namaDb + '.' + this.parseModuleInfo(this.for_module).namaTabel
        })
        if (this.targetColumnOptions.length > 0) {

        }
        else {
            this.pesan.pesanWarningForm('tidak ada kolom number pada module ini (contact IT support)!')
            // this.goToBack()
        }
    }

    triggerBuilder = {
        column: '',
        on: 'new',
        value: ''
    };

    getTriggerStageJson(): string {
        if (!this.triggerBuilder.column || !this.triggerBuilder.on) return '';
        return JSON.stringify(this.triggerBuilder);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.documentNumbering && this.documentNumbering?.idDocumentNumbering) {
            this.form?.patchValue(this.documentNumbering);
        }
    }





    submit(): void {
        const labelMap = extractLabels(ToolsDocumentNumberingFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }

        this.form.patchValue({
            triggerStage: this.getTriggerStageJson()
        })

        this.documentNumbering?.idDocumentNumbering ? this.update() : this.simpan();
    }

    is_loading = false;

    simpan() {
        this.is_loading = true;
        this.documentNumberingService.documentNumberingControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data documentNumbering berhasil disimpan.');
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
        this.documentNumberingService.documentNumberingControllerUpdate({ id: this.documentNumbering.idDocumentNumbering, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data documentNumbering berhasil diperbarui.');
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

    parseModuleInfo(idModule: string): { namaDb: string; namaTabel: string } {
        const match = idModule.match(/^([A-Z][a-z]+)([A-Z].*)$/);
        if (!match) return { namaDb: '', namaTabel: '' };

        const prefix = match[1]; // contoh: Pelanggan
        const suffix = match[2]; // contoh: Contract / ContractSite

        const namaDb = `erp_${prefix.toLowerCase()}`;
        const namaTabel = suffix
            .replace(/([A-Z])/g, '_$1')
            .replace(/^_/, '')
            .toLowerCase();

        return { namaDb, namaTabel };
    }
}

