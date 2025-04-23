import { ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { PesanService } from 'src/app/shared/services/pesan.service';
import { ToolsWorkflowAggregatorDto } from 'de-sdk-core';
import { WorkflowAggregatorService, WorkflowApplyService, WorkflowLogService, WorkflowService, WorkflowStepService } from 'de-sdk-core';

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

    hasAggregator = false;
    previousLog: any[] = [];
    catatan = '';
    is_loading = false;

    workflowSteps: any[] = [];
    currentStep: any = null;
    isFinalStep = false;

    constructor(
        private cd: ChangeDetectorRef,
        private pesan: PesanService,
        private workflowService: WorkflowService,
        private workflowLogService: WorkflowLogService,
        private workflowApplyService: WorkflowApplyService,
        private workflowStepService: WorkflowStepService,
        private workflowAggregatorService: WorkflowAggregatorService,
    ) { }

    ngOnInit(): void { }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.fromModuleId) {
            this.checkAggregator();
        }
    }
    workflowAggregator: ToolsWorkflowAggregatorDto = {
        fromModule: '',
        fromModuleId: '',
        idWorkflow: '',
        idWorkflowAggregator: ''
    }
    checkAggregator() {
        this.is_loading = true;

        this.workflowAggregatorService.workflowAggregatorControllerFindAll({
            filter: JSON.stringify({
                from_module: this.fromModule,
                from_module_id: this.fromModuleId
            })
        }).subscribe({
            next: (res) => {
                const aggregator:any = res.data?.[0];
                this.hasAggregator = !!aggregator;

                if (this.hasAggregator) {
                    this.workflowAggregator = aggregator
                    this.loadLastApproval(() => {
                        this.loadWorkflowSteps(aggregator);
                    });
                } else {
                    this.is_loading = false;
                    this.cd.detectChanges();
                }
            },
            error: () => {
                this.is_loading = false;
            }
        });
    }

    loadWorkflowSteps(aggregator: any) {
        if (!this.fromModule || !this.fromModuleId) return;

        const idWorkflow = aggregator.idWorkflow;
        const currentStepId = aggregator.lastWorkflowStep;

        this.workflowStepService.workflowStepControllerFindAll({
            filter: JSON.stringify({ id_workflow: idWorkflow }),
            sortKey: 'urutan',
            sortValue: 'asc'
        }).subscribe({
            next: (res2) => {
                const stepsRaw = res2.data || [];
                const currentStep = stepsRaw.find((x: any) => x.id_workflow_step === currentStepId);
                const currentUrutan = currentStep?.urutan ?? 0;
                const maxUrutan = Math.max(...stepsRaw.map((x: any) => x.urutan ?? 0));

                this.isFinalStep = currentUrutan >= maxUrutan;

                this.workflowSteps = stepsRaw.map((s: any) => {
                    let status: 'wait' | 'process' | 'finish' = 'wait';
                    if (s.id_workflow_step === currentStepId) status = 'process';
                    else if ((s.urutan ?? 0) < currentUrutan) status = 'finish';

                    const log = this.previousLog.find(l => l.idWorkflowStep === s.id_workflow_step);
                    const subtitle = log?.approvedAt || '';
                    const deskripsi = log ? `${log.namaUser} - ${log.catatan}` : '';

                    return {
                        nama_step: s.nama_step,
                        subtitle,
                        deskripsi,
                        status
                    };
                });

                this.currentStep = currentStep;
                this.is_loading = false;
                this.cd.detectChanges();
            }
        });
    }

    confirmWorkflow() {
        this.is_loading = true;
        const body: any = {
            from_module: this.fromModule,
            from_module_id: this.fromModuleId,
            id_kantor: this.idKantor,
        };

        this.workflowAggregatorService.workflowAggregatorControllerCreate({ body }).subscribe({
            next: () => {
                this.hasAggregator = true;
                this.checkAggregator();
                this.pesan.pesanBerhasilForm('Success');
            },
            error: () => {
                this.is_loading = false;
                this.cd.detectChanges();
            }
        });
    }

    loadLastApproval(callback?: () => void) {
        this.workflowLogService.workflowLogControllerFindAll({
            filter: JSON.stringify({
                for_module: this.fromModule,
                from_module_id: this.fromModuleId,
            })
        }).subscribe({
            next: (res) => {
                this.previousLog = (res.data || []).map((log: any) => ({
                    ...log,
                    approvedAt: log.approved_at,
                    statusAfter: log.status_after,
                    namaUser: log.nama_user,
                    idWorkflowStep: log.id_workflow_step,
                }));
                if (callback) callback();
            }
        });
    }

    submit(status: 'approve' | 'reject') {
        this.is_loading = true;
        const payload: any = {
            from_module: this.fromModule,
            from_module_id: this.fromModuleId,
            status,
            catatan: this.catatan,
        };

        this.workflowApplyService.workflowApplyControllerApplyStep({ body: payload }).subscribe({
            next: () => {
                this.is_loading = false;
                this.catatan = '';
                this.cd.detectChanges();
                this.onSubmit.emit({ status, note: payload.catatan });
                this.onAfterSubmit.emit();
                this.checkAggregator();
                this.pesan.pesanBerhasilForm(`Status ${status.toUpperCase()} berhasil disimpan`);
            },
            error: () => {
                this.is_loading = false;
            }
        });
    }
}