import { Component, Input, SimpleChanges } from '@angular/core';
import { MpcSelfMaintenanceWidgetService } from 'src/sdk/core/services/mpc-self-maintenance-widget.service';

@Component({
    selector: 'app-mpc-self-maintenance-share-widget',
    templateUrl: './mpc-self-maintenance-share-widget.component.html',
    styleUrl: './mpc-self-maintenance-share-widget.component.scss'
})
export class MpcSelfMaintenanceShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private mpcSelfMaintenanceWidgetService: MpcSelfMaintenanceWidgetService,
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
    //[{"type":"count","field":"status_mpc-self-maintenance_site","alias":"total"}, {"type":"max","field":"status_mpc-self-maintenance_site","alias":"status_mpc-self-maintenance_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.mpcSelfMaintenanceWidgetService
            .mpcSelfMaintenanceWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_mpc_self_maintenance" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_mpc_self_maintenance'],
                    sortKey: "status_mpc_self_maintenance",
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
