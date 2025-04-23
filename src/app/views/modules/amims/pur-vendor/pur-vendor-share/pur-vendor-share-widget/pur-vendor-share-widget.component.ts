import { Component, Input, SimpleChanges } from '@angular/core';
import { PurVendorWidgetService } from 'de-sdk-core/lib/services/pur-vendor-widget.service';

@Component({
    selector: 'app-pur-vendor-share-widget',
    templateUrl: './pur-vendor-share-widget.component.html',
    styleUrl: './pur-vendor-share-widget.component.scss'
})
export class PurVendorShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private purVendorWidgetService: PurVendorWidgetService,
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
    //[{"type":"count","field":"status_pur-vendor_site","alias":"total"}, {"type":"max","field":"status_pur-vendor_site","alias":"status_pur-vendor_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.purVendorWidgetService
            .purVendorWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_pur_vendor" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_pur_vendor'],
                    sortKey: "status_pur_vendor",
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
