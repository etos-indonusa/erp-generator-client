import { Component, Input, SimpleChanges } from '@angular/core';
import { StoreTransferWidgetService } from 'de-sdk-core/lib/services/store-transfer-widget.service';

@Component({
    selector: 'app-store-transfer-share-widget',
    templateUrl: './store-transfer-share-widget.component.html',
    styleUrl: './store-transfer-share-widget.component.scss'
})
export class StoreTransferShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private storeTransferWidgetService: StoreTransferWidgetService,
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
    //[{"type":"count","field":"status_store-transfer_site","alias":"total"}, {"type":"max","field":"status_store-transfer_site","alias":"status_store-transfer_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.storeTransferWidgetService
            .storeTransferWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_store_transfer" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_store_transfer'],
                    sortKey: "status_store_transfer",
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
