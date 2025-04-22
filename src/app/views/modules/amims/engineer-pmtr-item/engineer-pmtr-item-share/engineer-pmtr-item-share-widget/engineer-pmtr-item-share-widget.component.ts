import { Component, Input, SimpleChanges } from '@angular/core';
import { EngineerPmtrItemWidgetService } from 'de-sdk-core/services/engineer-pmtr-item-widget.service';

@Component({
    selector: 'app-engineer-pmtr-item-share-widget',
    templateUrl: './engineer-pmtr-item-share-widget.component.html',
    styleUrl: './engineer-pmtr-item-share-widget.component.scss'
})
export class EngineerPmtrItemShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private engineerPmtrItemWidgetService: EngineerPmtrItemWidgetService,
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
    //[{"type":"count","field":"status_engineer-pmtr-item_site","alias":"total"}, {"type":"max","field":"status_engineer-pmtr-item_site","alias":"status_engineer-pmtr-item_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.engineerPmtrItemWidgetService
            .engineerPmtrItemWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_engineer_pmtr_item" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_engineer_pmtr_item'],
                    sortKey: "status_engineer_pmtr_item",
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
