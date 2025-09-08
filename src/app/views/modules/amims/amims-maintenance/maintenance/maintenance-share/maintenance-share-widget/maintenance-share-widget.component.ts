import { Component, Input, SimpleChanges } from '@angular/core';
import { MaintenanceWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-share-widget',
    templateUrl: './maintenance-share-widget.component.html',
    styleUrl: './maintenance-share-widget.component.scss'
})
export class MaintenanceShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private maintenanceWidgetService: MaintenanceWidgetService,
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
    //[{"type":"count","field":"status_maintenance_site","alias":"total"}, {"type":"max","field":"status_maintenance_site","alias":"status_maintenance_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.maintenanceWidgetService
            .maintenanceWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"on_location" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy: ['on_location'],
                    sortKey: "on_location",
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
