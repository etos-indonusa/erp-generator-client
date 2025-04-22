import { Component, Input, SimpleChanges } from '@angular/core';
import { PurGrnItemWidgetService } from 'de-sdk-core/services/pur-grn-item-widget.service';

@Component({
    selector: 'app-pur-grn-item-share-widget',
    templateUrl: './pur-grn-item-share-widget.component.html',
    styleUrl: './pur-grn-item-share-widget.component.scss'
})
export class PurGrnItemShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private purGrnItemWidgetService: PurGrnItemWidgetService,
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
    //[{"type":"count","field":"status_pur-grn-item_site","alias":"total"}, {"type":"max","field":"status_pur-grn-item_site","alias":"status_pur-grn-item_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.purGrnItemWidgetService
            .purGrnItemWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_pur_grn_item" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_pur_grn_item'],
                    sortKey: "status_pur_grn_item",
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
