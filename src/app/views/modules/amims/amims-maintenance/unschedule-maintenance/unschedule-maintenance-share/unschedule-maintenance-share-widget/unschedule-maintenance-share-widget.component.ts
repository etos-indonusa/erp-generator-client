import { Component, Input, SimpleChanges } from '@angular/core';
import { UnscheduleMaintenanceWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-unschedule-maintenance-share-widget',
    templateUrl: './unschedule-maintenance-share-widget.component.html',
    styleUrl: './unschedule-maintenance-share-widget.component.scss'
})
export class UnscheduleMaintenanceShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private unscheduleMaintenanceWidgetService: UnscheduleMaintenanceWidgetService,
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
    //[{"type":"count","field":"status_unschedule-maintenance_site","alias":"total"}, {"type":"max","field":"status_unschedule-maintenance_site","alias":"status_unschedule-maintenance_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.unscheduleMaintenanceWidgetService
            .unscheduleMaintenanceWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_unschedule_maintenance" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_unschedule_maintenance'],
                    sortKey: "status_unschedule_maintenance",
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
