import { Component, Input, SimpleChanges } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { WorkflowAggregatorService, WorkflowLogService, WorkflowStepService } from 'de-sdk-core/lib/services';
import { ApprovalLogsComponent } from '../approval-logs/approval-logs.component';

@Component({
    selector: 'lib-approval-steps',
    templateUrl: './approval-steps.component.html',
    styleUrl: './approval-steps.component.scss'
})
export class ApprovalStepsComponent {
    @Input('for-module-name') moduleName: any = '';
    @Input('for-module-id') moduleId: any = '';

    constructor(
        private nzDrawerService: NzDrawerService,
        private workflowAggregatorService: WorkflowAggregatorService,
        private workflowStepService: WorkflowStepService,
        private workflowLogService: WorkflowLogService
    ) { }

    steps: any[] = [];
    index = 0;
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        if(this.moduleId)
        {
            this.loadLogs();
        }
    }

    ngOnInit(): void {
       
    }
    logs: any[] = [];
    isLoading = false
    loadLogs() {
        this.isLoading = true;

        this.workflowLogService.workflowLogControllerFindAll({
            filter: JSON.stringify({
                for_module: this.moduleName,
                from_module_id: this.moduleId
            }),
            sortKey: 'approved_at',
            sortValue: 'asc'
        }).subscribe({
            next: (res) => {
                this.logs = res.data || [];
                this.isLoading = false;
                this.loadSteps()
            },
            error: () => {
                this.logs = [];
                this.isLoading = false;
            }
        });
    }

    loadSteps() {
        if (!this.moduleName || !this.moduleId) return;

        this.workflowAggregatorService.workflowAggregatorControllerFindAll({
            filter: JSON.stringify({
                from_module: this.moduleName,
                from_module_id: this.moduleId,
            }),
        }).subscribe({
            next: (res: any) => {
                const aggregator = res.data?.[0];
                if (!aggregator) return;

                const idWorkflow = aggregator.id_workflow;
                const currentStepId = aggregator.last_workflow_step;

                this.workflowStepService.workflowStepControllerFindAll({
                    filter: JSON.stringify({ id_workflow: idWorkflow }),
                    sortKey: 'urutan',
                    sortValue: 'asc',
                }).subscribe({
                    next: (res2: any) => {
                        const stepsRaw = res2.data;
                        const currentUrutan = stepsRaw.find((x: any) => x.id_workflow_step === currentStepId)?.urutan || 0;
                        console.log(stepsRaw)
                        this.steps = stepsRaw.map((s: any) => {
                            let status: 'wait' | 'process' | 'finish' = 'wait';

                            if (s.id_workflow_step === currentStepId) {
                                status = 'process';
                            } else if (s.urutan < currentUrutan) {
                                status = 'finish';
                            }

                            const log = this.logs.find((l: any) => l.id_workflow_step === s.id_workflow_step);
                            const subtitle = log ? log.approvedAt : '';
                            const deskripsi = log ? `${log.namaUser} - ${log.catatan}` : '';

                            return {
                                nama_step: s.statusTo, // atau s.statusTo
                                subtitle,
                                deskripsi,
                                status
                            };
                        });

                        this.index = this.steps.findIndex(x => x.status === 'process' || x.status === 'wait');
                    }
                });
            }
        });
    }

    onIndexChange(i: number): void {
        this.index = i;
        this.detail();
    }

    getNzStatus(status: string): 'wait' | 'process' | 'finish' | 'error' {
        const valid = ['wait', 'process', 'finish', 'error'] as const;
        return valid.includes(status as any) ? status as any : 'wait';
    }

    detail() {
        const drawerRef = this.nzDrawerService.create<ApprovalLogsComponent, {}, string>({
            nzTitle: 'Logs',
            nzContent: ApprovalLogsComponent,
            nzWidth: (500) + 'px',
            nzContentParams: {
                fromModule: this.moduleName,
                fromModuleId: this.moduleId
            }
        });

        drawerRef.afterClose.subscribe(() => {

        });
    }
}   
