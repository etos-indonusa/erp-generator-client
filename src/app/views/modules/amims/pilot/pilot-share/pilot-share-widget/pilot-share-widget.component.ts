import { Component, Input, SimpleChanges } from '@angular/core';
import { PilotWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-pilot-share-widget',
    templateUrl: './pilot-share-widget.component.html',
    styleUrl: './pilot-share-widget.component.scss'
})
export class PilotShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private pilotWidgetService: PilotWidgetService,
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
    //[{"type":"count","field":"status_pilot_site","alias":"total"}, {"type":"max","field":"status_pilot_site","alias":"status_pilot_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.pilotWidgetService
            .pilotWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_pilot" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_pilot'],
                    sortKey: "status_pilot",
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
