import { Component, Input, SimpleChanges } from '@angular/core';
import { PurPoWidgetService } from 'de-sdk-core/lib/services/pur-po-widget.service';

@Component({
    selector: 'app-pur-po-share-widget',
    templateUrl: './pur-po-share-widget.component.html',
    styleUrl: './pur-po-share-widget.component.scss'
})
export class PurPoShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private purPoWidgetService: PurPoWidgetService,
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
    //[{"type":"count","field":"status_pur-po_site","alias":"total"}, {"type":"max","field":"status_pur-po_site","alias":"status_pur-po_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.purPoWidgetService
            .purPoWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_pur_po" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_pur_po'],
                    sortKey: "status_pur_po",
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
