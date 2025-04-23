import { Component, Input, SimpleChanges } from '@angular/core';
import { ConditionMonitoringWidgetService } from 'de-sdk-core/lib/services/condition-monitoring-widget.service';

@Component({
    selector: 'app-condition-monitoring-share-widget',
    templateUrl: './condition-monitoring-share-widget.component.html',
    styleUrl: './condition-monitoring-share-widget.component.scss'
})
export class ConditionMonitoringShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private conditionMonitoringWidgetService: ConditionMonitoringWidgetService,
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
    //[{"type":"count","field":"status_condition-monitoring_site","alias":"total"}, {"type":"max","field":"status_condition-monitoring_site","alias":"status_condition-monitoring_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.conditionMonitoringWidgetService
            .conditionMonitoringWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_condition_monitoring" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_condition_monitoring'],
                    sortKey: "status_condition_monitoring",
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
