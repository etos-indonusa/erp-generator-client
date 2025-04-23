import { Component, Input, SimpleChanges } from '@angular/core';
import { QaTransferItemWidgetService } from 'de-sdk-core/lib/services/qa-transfer-item-widget.service';

@Component({
    selector: 'app-qa-transfer-item-share-widget',
    templateUrl: './qa-transfer-item-share-widget.component.html',
    styleUrl: './qa-transfer-item-share-widget.component.scss'
})
export class QaTransferItemShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private qaTransferItemWidgetService: QaTransferItemWidgetService,
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
    //[{"type":"count","field":"status_qa-transfer-item_site","alias":"total"}, {"type":"max","field":"status_qa-transfer-item_site","alias":"status_qa-transfer-item_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.qaTransferItemWidgetService
            .qaTransferItemWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_qa_transfer_item" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_qa_transfer_item'],
                    sortKey: "status_qa_transfer_item",
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
