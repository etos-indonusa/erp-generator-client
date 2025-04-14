import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { ToolsWorkflowLogFormSchema } from 'src/sdk/core/form-schema/tools-workflow-log.form-schema'; 
import type { ToolsWorkflowLogDto } from 'src/sdk/core/models';
import { WorkflowLogService } from 'src/sdk/core/services';

import { UsersService } from 'src/sdk/core/services';
import { WorkflowStepService } from 'src/sdk/core/services';
 
@Component({
    selector: 'app-workflow-log-share-add',
    templateUrl: './workflow-log-share-add.component.html',
    styleUrl: './workflow-log-share-add.component.scss'
})
export class WorkflowLogShareAddComponent {
    @Input('workflowLog') workflowLog: ToolsWorkflowLogDto = {
  forModule: '',
  fromModuleId: '',
  idUsers: '',
  idWorkflowLog: '',
  idWorkflowStep: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.workflowLog && this.workflowLog.idWorkflowLog) {
        this.form?.patchValue(this.workflowLog);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private workflowLogService: WorkflowLogService,
                        private usersService: UsersService,
                private workflowStepService: WorkflowStepService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, ToolsWorkflowLogFormSchema, {
            kodeWorkflowLog: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'WorkflowLog');

                            this.getAllUsers();
                    this.getAllWorkflowStep();
                    }
    
    listUsers: any[] = [];
    
    listWorkflowStep: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllUsers() {
    this.usersService.usersControllerFindAll().subscribe(
      data => this.listUsers = data.data ?? []
    );
  }
        getAllWorkflowStep() {
    this.workflowStepService.workflowStepControllerFindAll().subscribe(
      data => this.listWorkflowStep = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(ToolsWorkflowLogFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.workflowLog.idWorkflowLog ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.workflowLogService.workflowLogControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data workflowLog berhasil disimpan.');
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
        this.workflowLogService.workflowLogControllerUpdate({ id: this.workflowLog.idWorkflowLog, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data workflowLog berhasil diperbarui.');
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
