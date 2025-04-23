import { Component, Input, SimpleChanges } from '@angular/core';
import { PurVendorContactWidgetService } from 'de-sdk-core/lib/services/pur-vendor-contact-widget.service';

@Component({
    selector: 'app-pur-vendor-contact-share-widget',
    templateUrl: './pur-vendor-contact-share-widget.component.html',
    styleUrl: './pur-vendor-contact-share-widget.component.scss'
})
export class PurVendorContactShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private purVendorContactWidgetService: PurVendorContactWidgetService,
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
    //[{"type":"count","field":"status_pur-vendor-contact_site","alias":"total"}, {"type":"max","field":"status_pur-vendor-contact_site","alias":"status_pur-vendor-contact_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.purVendorContactWidgetService
            .purVendorContactWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_pur_vendor_contact" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_pur_vendor_contact'],
                    sortKey: "status_pur_vendor_contact",
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
