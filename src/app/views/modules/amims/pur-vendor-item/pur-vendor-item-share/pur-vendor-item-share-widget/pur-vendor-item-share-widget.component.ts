import { Component, Input, SimpleChanges } from '@angular/core';
import { PurVendorItemWidgetService } from 'src/sdk/core/services/pur-vendor-item-widget.service';

@Component({
    selector: 'app-pur-vendor-item-share-widget',
    templateUrl: './pur-vendor-item-share-widget.component.html',
    styleUrl: './pur-vendor-item-share-widget.component.scss'
})
export class PurVendorItemShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private purVendorItemWidgetService: PurVendorItemWidgetService,
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
    //[{"type":"count","field":"status_pur-vendor-item_site","alias":"total"}, {"type":"max","field":"status_pur-vendor-item_site","alias":"status_pur-vendor-item_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.purVendorItemWidgetService
            .purVendorItemWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_pur_vendor_item" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_pur_vendor_item'],
                    sortKey: "status_pur_vendor_item",
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
