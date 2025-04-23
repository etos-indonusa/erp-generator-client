import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { ToolsWorkflowFormSchema } from 'de-sdk-core/lib/form-schema/tools-workflow.form-schema';
import type { ToolsWorkflowDto } from 'de-sdk-core/lib/models';
import { WorkflowService } from 'de-sdk-core/lib/services';

import { KantorService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-workflow-share-add',
    templateUrl: './workflow-share-add.component.html',
    styleUrl: './workflow-share-add.component.scss'
})
export class WorkflowShareAddComponent {
    @Input('for_module') for_module: any
    @Input('workflow') workflow: ToolsWorkflowDto = {
        forModule: '',
        idWorkflow: '',
        namaWorkflow: '',
        targetDb: '',
        targetTable: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.workflow && this.workflow.idWorkflow) {
            this.form?.patchValue(this.workflow);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private workflowService: WorkflowService,
        private kantorService: KantorService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, ToolsWorkflowFormSchema, {
            kodeWorkflow: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'Workflow');

        this.getAllKantor();
    }

    listKantor: any[] = [];


    // untuk fungsi get ALL relation
    getAllKantor() {
        this.kantorService.kantorControllerFindAll().subscribe(
            data => this.listKantor = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(ToolsWorkflowFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.workflow.idWorkflow ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.form.patchValue({
            for_module: this.for_module
        })
        this.is_loading = true;
        this.workflowService.workflowControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data workflow berhasil disimpan.');
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
        this.workflowService.workflowControllerUpdate({ id: this.workflow.idWorkflow, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data workflow berhasil diperbarui.');
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
