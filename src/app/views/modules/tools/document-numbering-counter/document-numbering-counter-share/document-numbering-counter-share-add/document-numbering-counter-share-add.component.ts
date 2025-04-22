import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { ToolsDocumentNumberingCounterFormSchema } from 'de-sdk-core/form-schema/tools-document-numbering-counter.form-schema'; 
import type { ToolsDocumentNumberingCounterDto } from 'de-sdk-core/models';
import { DocumentNumberingCounterService } from 'de-sdk-core/services';

import { DocumentNumberingService } from 'de-sdk-core/services';
import { KantorService } from 'de-sdk-core/services';
 
@Component({
    selector: 'app-document-numbering-counter-share-add',
    templateUrl: './document-numbering-counter-share-add.component.html',
    styleUrl: './document-numbering-counter-share-add.component.scss'
})
export class DocumentNumberingCounterShareAddComponent {
    @Input('documentNumberingCounter') documentNumberingCounter: ToolsDocumentNumberingCounterDto = {
  idDocumentNumbering: '',
  idDocumentNumberingCounter: '',
  tahun: 0
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.documentNumberingCounter && this.documentNumberingCounter.idDocumentNumberingCounter) {
        this.form?.patchValue(this.documentNumberingCounter);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private documentNumberingCounterService: DocumentNumberingCounterService,
                        private documentNumberingService: DocumentNumberingService,
                private kantorService: KantorService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, ToolsDocumentNumberingCounterFormSchema, {
            // kodeDocumentNumberingCounter: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'DocumentNumberingCounter');

                            this.getAllDocumentNumbering();
                    this.getAllKantor();
                    }
    
    listDocumentNumbering: any[] = [];
    
    listKantor: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllDocumentNumbering() {
    this.documentNumberingService.documentNumberingControllerFindAll().subscribe(
      data => this.listDocumentNumbering = data.data ?? []
    );
  }
        getAllKantor() {
    this.kantorService.kantorControllerFindAll().subscribe(
      data => this.listKantor = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(ToolsDocumentNumberingCounterFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.documentNumberingCounter.idDocumentNumberingCounter ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.documentNumberingCounterService.documentNumberingCounterControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data documentNumberingCounter berhasil disimpan.');
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
        this.documentNumberingCounterService.documentNumberingCounterControllerUpdate({ id: this.documentNumberingCounter.idDocumentNumberingCounter, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data documentNumberingCounter berhasil diperbarui.');
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
