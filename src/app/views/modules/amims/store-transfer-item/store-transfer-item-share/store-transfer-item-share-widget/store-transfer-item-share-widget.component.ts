import { Component, Input, SimpleChanges } from '@angular/core';
import { StoreTransferItemWidgetService } from 'src/sdk/core/services/store-transfer-item-widget.service';

@Component({
    selector: 'app-store-transfer-item-share-widget',
    templateUrl: './store-transfer-item-share-widget.component.html',
    styleUrl: './store-transfer-item-share-widget.component.scss'
})
export class StoreTransferItemShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private storeTransferItemWidgetService: StoreTransferItemWidgetService,
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
    //[{"type":"count","field":"status_store-transfer-item_site","alias":"total"}, {"type":"max","field":"status_store-transfer-item_site","alias":"status_store-transfer-item_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.storeTransferItemWidgetService
            .storeTransferItemWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_store_transfer_item" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_store_transfer_item'],
                    sortKey: "status_store_transfer_item",
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
