import { Component, Input, SimpleChanges } from '@angular/core';
import { AircraftWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-aircraft-share-widget',
    templateUrl: './aircraft-share-widget.component.html',
    styleUrl: './aircraft-share-widget.component.scss'
})
export class AircraftShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private aircraftWidgetService: AircraftWidgetService,
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
    //[{"type":"count","field":"status_aircraft_site","alias":"total"}, {"type":"max","field":"status_aircraft_site","alias":"status_aircraft_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.aircraftWidgetService
            .aircraftWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field: "status_ac",
                            alias: "jumlah"
                        }
                    ],
                    groupBy: ['status_ac'],
                    sortKey: "status_ac",
                    sortValue: "ASC"
                }
            })
            .subscribe((data) => {
                this.total = data.total ?? 0;
                this.status_urutan = data.data ?? [];
                this.status_urutan.forEach(x => {
                    this.total = this.total + x.jumlah * 1
                })
                this.is_loading = false;
            });
    }
}
