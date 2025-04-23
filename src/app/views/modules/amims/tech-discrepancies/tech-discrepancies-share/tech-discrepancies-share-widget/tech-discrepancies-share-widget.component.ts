import { Component, Input, SimpleChanges } from '@angular/core';
import { TechDiscrepanciesWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-tech-discrepancies-share-widget',
    templateUrl: './tech-discrepancies-share-widget.component.html',
    styleUrl: './tech-discrepancies-share-widget.component.scss'
})
export class TechDiscrepanciesShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private techDiscrepanciesWidgetService: TechDiscrepanciesWidgetService,
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
    //[{"type":"count","field":"status_tech-discrepancies_site","alias":"total"}, {"type":"max","field":"status_tech-discrepancies_site","alias":"status_tech-discrepancies_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.techDiscrepanciesWidgetService
            .techDiscrepanciesWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_tech_discrepancies" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_tech_discrepancies'],
                    sortKey: "status_tech_discrepancies",
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
