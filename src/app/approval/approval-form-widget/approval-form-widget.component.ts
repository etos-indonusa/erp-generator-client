import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-approval-form-widget',
  templateUrl: './approval-form-widget.component.html',
  styleUrl: './approval-form-widget.component.scss'
})
export class ApprovalFormWidgetComponent {
    @Input('from-module') fromModule: any = '';
    @Input('from-module-id') fromModuleId: any = '';
    @Input('id-kantor') idKantor: string | null = null;

    @Output() onSubmit = new EventEmitter<{ status: 'approve' | 'reject', note: string }>();
    @Output() onAfterSubmit = new EventEmitter<void>();

    constructor(
        private cd: ChangeDetectorRef ,
    ) { }

    hasAggregator = false;
    previousLog: any = null;
    catatan = '';
    is_loading = false;

    dummyWorkflowId = 'workflow-123';
    dummySteps = [
        { id_workflow_step: 'step-1', nama_step: 'Draft', urutan: 1 },
        { id_workflow_step: 'step-2', nama_step: 'Approval Manager', urutan: 2 },
        { id_workflow_step: 'step-3', nama_step: 'Approval Finance', urutan: 3 },
    ];

    ngOnInit(): void {
        const key = `aggregator_${this.fromModule}_${this.fromModuleId}`;
        this.hasAggregator = localStorage.getItem(key) === 'true';

        if (this.hasAggregator) {
            this.loadLastApproval();
        }
    }

    confirmWorkflow() {
        this.is_loading = true;

        setTimeout(() => {
            const aggregatorKey = `aggregator_${this.fromModule}_${this.fromModuleId}`;
            const dummy = {
                id_workflow: this.dummyWorkflowId,
                id_workflow_step_last: this.dummySteps[0].id_workflow_step,
                from_module: this.fromModule,
                from_module_id: this.fromModuleId,
                created_at: new Date().toISOString(),
            };

            localStorage.setItem(aggregatorKey, 'true');
            localStorage.setItem(`${aggregatorKey}_data`, JSON.stringify(dummy));

            this.hasAggregator = true;
            this.loadLastApproval();
            this.is_loading = false;
            this.cd.detectChanges();
        }, 1000);
    }

    loadLastApproval() {
        const key = `aggregator_${this.fromModule}_${this.fromModuleId}`;
        const last = localStorage.getItem(`${key}_last_log`);
        if (last) {
            this.previousLog = JSON.parse(last);
        }
    }

    submit(status: 'approve' | 'reject') {
        this.is_loading = true;

        setTimeout(() => {
            const key = `aggregator_${this.fromModule}_${this.fromModuleId}`;
            const now = new Date().toISOString();

            const payload = {
                user: 'Simulated User',
                catatan: this.catatan,
                tanggal: now,
                status
            };

            localStorage.setItem(`${key}_last_log`, JSON.stringify(payload));

            this.is_loading = false;
            this.catatan = '';

            this.cd.detectChanges();
            this.onSubmit.emit({ status, note: payload.catatan });
            this.onAfterSubmit.emit();
            this.loadLastApproval();

            alert(`Status ${status.toUpperCase()} berhasil disimpan`);
        }, 1000);
    }
}
