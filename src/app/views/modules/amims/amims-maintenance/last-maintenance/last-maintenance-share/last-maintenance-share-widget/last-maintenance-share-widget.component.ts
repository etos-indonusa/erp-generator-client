import { Component, Input, SimpleChanges } from '@angular/core';
import { LastMaintenanceWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-last-maintenance-share-widget',
    templateUrl: './last-maintenance-share-widget.component.html',
    styleUrl: './last-maintenance-share-widget.component.scss'
})
export class LastMaintenanceShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private lastMaintenanceWidgetService: LastMaintenanceWidgetService,
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
    //[{"type":"count","field":"status_last-maintenance_site","alias":"total"}, {"type":"max","field":"status_last-maintenance_site","alias":"status_last-maintenance_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.lastMaintenanceWidgetService
            .lastMaintenanceWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_last_maintenance" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_last_maintenance'],
                    sortKey: "status_last_maintenance",
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
