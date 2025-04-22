import { Component, Input, SimpleChanges } from '@angular/core';
import { WorkflowWidgetService } from 'de-sdk-core/services/workflow-widget.service';

@Component({
    selector: 'app-workflow-share-widget',
    templateUrl: './workflow-share-widget.component.html',
    styleUrl: './workflow-share-widget.component.scss'
})
export class WorkflowShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private workflowWidgetService: WorkflowWidgetService,
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
    //[{"type":"count","field":"status_workflow_site","alias":"total"}, {"type":"max","field":"status_workflow_site","alias":"status_workflow_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.workflowWidgetService
            .workflowWidgetControllerFindAll({
                body: {
                    filter: JSON.stringify(this.filter),
                    select: [
                        {
                            type: "count",
                            field:"status_workflow" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_workflow'],
                    sortKey: "status_workflow",
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
