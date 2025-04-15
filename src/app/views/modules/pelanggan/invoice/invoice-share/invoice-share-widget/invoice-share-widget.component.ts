import { Component, Input, SimpleChanges } from '@angular/core';
import { InvoiceWidgetService } from 'src/sdk/core/services/invoice-widget.service';

@Component({
    selector: 'app-invoice-share-widget',
    templateUrl: './invoice-share-widget.component.html',
    styleUrl: './invoice-share-widget.component.scss'
})
export class InvoiceShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private invoiceWidgetService: InvoiceWidgetService,
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
    //[{"type":"count","field":"status_invoice_site","alias":"total"}, {"type":"max","field":"status_invoice_site","alias":"status_invoice_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.invoiceWidgetService
            .invoiceWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_invoice" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_invoice'],
                    sortKey: "status_invoice",
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
