import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { WorkflowLogService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-approval-logs',
    templateUrl: './approval-logs.component.html',
    styleUrl: './approval-logs.component.scss'
})
export class ApprovalLogsComponent implements OnInit {
    @Input('from-module') fromModule: string = '';
    @Input('from-module-id') fromModuleId: string = '';

    logs: any[] = [];
    isLoading = false;

    constructor(private workflowLogService: WorkflowLogService) { }

    ngOnInit(): void {
        this.loadLogs();
    }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        if (this.fromModule && this.fromModuleId) {
            this.loadLogs();
        }
    }

    loadLogs() {
        this.isLoading = true;

        this.workflowLogService.workflowLogControllerFindAll({
            filter: JSON.stringify({
                for_module: this.fromModule,
                from_module_id: this.fromModuleId
            }),
            sortKey: 'approved_at',
            sortValue: 'asc'
        }).subscribe({
            next: (res) => {
                this.logs = res.data || [];
                this.isLoading = false;
            },
            error: () => {
                this.logs = [];
                this.isLoading = false;
            }
        });
    }

    get currentIndex(): number {
        return this.logs.findIndex(x => x.status_after === 'process' || x.status_after === 'wait');
    }

    mapStatus(status: string): 'wait' | 'process' | 'finish' | 'error' {
        return (status as any) || 'wait';
    }
}
