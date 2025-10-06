import { Component, Input, SimpleChanges } from '@angular/core';
import { WorkCompletedWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-work-completed-share-widget',
    templateUrl: './work-completed-share-widget.component.html',
    styleUrl: './work-completed-share-widget.component.scss'
})
export class WorkCompletedShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private workCompletedWidgetService: WorkCompletedWidgetService,
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.reload) {
            if (changes.reload.currentValue != changes.reload.previousValue && changes.reload.currentValue > 1) {
                this.getDataWidget()
            }
        }
    }
 
    ngOnInit(): void {
        this.getDataWidget()
    }

    breadCrumbItems = [
        { label: 'List', active: false }
    ]
    is_loading: boolean = false
    total: number = 0;
    status_urutan: any[] = []
    //[{"type":"count","field":"status_work-completed_site","alias":"total"}, {"type":"max","field":"status_work-completed_site","alias":"status_work-completed_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.workCompletedWidgetService
            .workCompletedWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_work_completed" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_work_completed'],
                    sortKey: "status_work_completed",
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
