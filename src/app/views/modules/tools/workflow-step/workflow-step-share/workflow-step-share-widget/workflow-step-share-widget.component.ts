import { Component, Input, SimpleChanges } from '@angular/core';
import { WorkflowStepWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-workflow-step-share-widget',
    templateUrl: './workflow-step-share-widget.component.html',
    styleUrl: './workflow-step-share-widget.component.scss'
})
export class WorkflowStepShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private workflowStepWidgetService: WorkflowStepWidgetService,
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.reload) {
            if (changes.reload.currentValue != changes.reload.previousValue && changes.reload.currentValue > 1) {
                this.getDataWidget()
            }
        }
    }
 
    ngOnInit(): void {
    }

    breadCrumbItems = [
        { label: 'List', active: false }
    ]
    is_loading: boolean = false
    total: number = 0;
    status_urutan: any[] = []
    //[{"type":"count","field":"status_workflow-step_site","alias":"total"}, {"type":"max","field":"status_workflow-step_site","alias":"status_workflow-step_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.workflowStepWidgetService
            .workflowStepWidgetControllerFindAll({
                body: {
                    filter: JSON.stringify(this.filter),
                    select: [
                        {
                            type: "count",
                            field:"status_workflow_step" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_workflow_step'],
                    sortKey: "status_workflow_step",
                    sortValue: "ASC"
                }
            })
            .subscribe((data) => {
                this.total = data.total ?? 0;
                this.status_urutan = data.data ?? [] ; 
                this.status_urutan.forEach(x => {
                    this.total = this.total + x.jumlah * 1
                })
                this.is_loading = false;
            });
    }
}
