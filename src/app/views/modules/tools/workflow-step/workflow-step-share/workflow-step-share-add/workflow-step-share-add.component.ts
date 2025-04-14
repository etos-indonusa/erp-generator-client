import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { ToolsWorkflowStepFormSchema } from 'src/sdk/core/form-schema/tools-workflow-step.form-schema';
import type { AclUserGroupDto, AclUsersDto, ToolsWorkflowStepDto } from 'src/sdk/core/models';
import { UserGroupService, UsersService, WorkflowStepService } from 'src/sdk/core/services';

import { WorkflowService } from 'src/sdk/core/services';
import { UsersDto } from 'src/sdk/lib/models';
import { WorkflowStepAddTrigerBuilderComponent } from '../workflow-step-add-triger-builder/workflow-step-add-triger-builder.component';

@Component({
    selector: 'app-workflow-step-share-add',
    templateUrl: './workflow-step-share-add.component.html',
    styleUrl: './workflow-step-share-add.component.scss'
})
export class WorkflowStepShareAddComponent {
    @ViewChild(WorkflowStepAddTrigerBuilderComponent) triggerBuilder?: WorkflowStepAddTrigerBuilderComponent;
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

        if (changes.workflowStep && this.workflowStep.idWorkflowStep) {
            this.form?.patchValue(this.workflowStep);

            // Load triggerJson ke visual builder
            try {
                const parsed = JSON.parse(this.workflowStep.triggerJson || '[]');
                this.triggerBuilder?.loadFromJson(parsed);
            } catch { }

            // Load allowRoles
            try {
                const roles = JSON.parse(this.workflowStep.allowRoles || '[]');
                this.form.get('allowRoles')?.setValue(roles);
            } catch { }

            // Load allowUserIds
            try {
                const users = JSON.parse(this.workflowStep.allowUserIds || '[]');
                this.form.get('allowUserIds')?.setValue(users);
            } catch { }
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private workflowStepService: WorkflowStepService,
        private usersService: UsersService,
        private userGroupService: UserGroupService,
        private workflowService: WorkflowService,
    ) { }



    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, ToolsWorkflowStepFormSchema, {
            kodeWorkflowStep: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'WorkflowStep');

        this.getAllWorkflow();
        this.getAllUser();
        this.getAllUserGroup();
    }

    listWorkflow: any[] = [];
    listUser: AclUsersDto[] = [];
    listUserGroup: AclUserGroupDto[] = [];
    listOfTagUser = []
    listOfTagUserGroup = []

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
    getAllUserGroup() {
        this.userGroupService.userGroupControllerFindAll().subscribe(
            data => this.listUserGroup = data.data ?? []
        );
    }

    onRuleJsonChanged(json: string) {
        this.form?.get('ruleJson')?.setValue(json);
    }

    onTriggerJsonChanged(json: string) {
        this.form.get('triggerJson')?.setValue(json);
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
        const val = { ...this.form.value };
        ['allowRoles', 'allowUserIds'].forEach(field => {
            const raw = val[field];
            if (Array.isArray(raw)) {
                val[field] = JSON.stringify(raw);
            }
        });

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
        const val = { ...this.form.value };
        ['allowRoles', 'allowUserIds'].forEach(field => {
            const raw = val[field];
            if (Array.isArray(raw)) {
                val[field] = JSON.stringify(raw);
            }
        });
        

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
