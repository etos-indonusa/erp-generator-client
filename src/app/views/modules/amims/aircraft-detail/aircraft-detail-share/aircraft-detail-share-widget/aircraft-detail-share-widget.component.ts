import { Component, Input, SimpleChanges } from '@angular/core';
import { AircraftDetailWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-aircraft-detail-share-widget',
    templateUrl: './aircraft-detail-share-widget.component.html',
    styleUrl: './aircraft-detail-share-widget.component.scss'
})
export class AircraftDetailShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private aircraftDetailWidgetService: AircraftDetailWidgetService,
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
    //[{"type":"count","field":"status_aircraft-detail_site","alias":"total"}, {"type":"max","field":"status_aircraft-detail_site","alias":"status_aircraft-detail_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.aircraftDetailWidgetService
            .aircraftDetailWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_aircraft_detail" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_aircraft_detail'],
                    sortKey: "status_aircraft_detail",
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
