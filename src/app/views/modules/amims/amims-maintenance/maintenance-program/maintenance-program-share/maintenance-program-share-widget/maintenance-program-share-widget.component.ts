import { Component, Input, SimpleChanges } from '@angular/core';
import { MaintenanceProgramWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-program-share-widget',
    templateUrl: './maintenance-program-share-widget.component.html',
    styleUrl: './maintenance-program-share-widget.component.scss'
})
export class MaintenanceProgramShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private maintenanceProgramWidgetService: MaintenanceProgramWidgetService,
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
    //[{"type":"count","field":"status_maintenance-program_site","alias":"total"}, {"type":"max","field":"status_maintenance-program_site","alias":"status_maintenance-program_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.maintenanceProgramWidgetService
            .maintenanceProgramWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"is_active" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy: ['is_active'],
                    sortKey: "is_active",
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
