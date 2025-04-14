import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { ToolsWorkflowStepFormSchema } from 'src/sdk/core/form-schema/tools-workflow-step.form-schema';
import type { ToolsWorkflowStepDto } from 'src/sdk/core/models';
import { UsersService, WorkflowStepService } from 'src/sdk/core/services';

import { WorkflowService } from 'src/sdk/core/services';
import { UsersDto } from 'src/sdk/lib/models';

@Component({
    selector: 'app-workflow-step-share-add',
    templateUrl: './workflow-step-share-add.component.html',
    styleUrl: './workflow-step-share-add.component.scss'
})
export class WorkflowStepShareAddComponent {
    @Input('workflowStep') workflowStep: ToolsWorkflowStepDto = {
        idWorkflow: '',
        idWorkflowStep: '',
        statusFrom: '',
        statusTo: '',
        urutan: 0
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.workflowStep && this.workflowStep.idWorkflowStep) {
            this.form?.patchValue(this.workflowStep);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private workflowStepService: WorkflowStepService,
        private usersService: UsersService,
        private workflowService: WorkflowService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, ToolsWorkflowStepFormSchema, {
            kodeWorkflowStep: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'WorkflowStep');

        this.getAllWorkflow();
        this.getAllUser();
    }

    listWorkflow: any[] = [];
    listUser: UsersDto[] = [];
    listOfTagUser = []

    // untuk fungsi get ALL relation
    getAllWorkflow() {
        this.workflowService.workflowControllerFindAll().subscribe(
            data => this.listWorkflow = data.data ?? []
        );
    }
    getAllUser() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUser = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(ToolsWorkflowStepFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.workflowStep.idWorkflowStep ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.workflowStepService.workflowStepControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data workflowStep berhasil disimpan.');
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
        this.workflowStepService.workflowStepControllerUpdate({ id: this.workflowStep.idWorkflowStep, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data workflowStep berhasil diperbarui.');
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
