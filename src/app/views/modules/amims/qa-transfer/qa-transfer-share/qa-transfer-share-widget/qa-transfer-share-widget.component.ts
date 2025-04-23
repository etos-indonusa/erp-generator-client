import { Component, Input, SimpleChanges } from '@angular/core';
import { QaTransferWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-qa-transfer-share-widget',
    templateUrl: './qa-transfer-share-widget.component.html',
    styleUrl: './qa-transfer-share-widget.component.scss'
})
export class QaTransferShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private qaTransferWidgetService: QaTransferWidgetService,
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
    //[{"type":"count","field":"status_qa-transfer_site","alias":"total"}, {"type":"max","field":"status_qa-transfer_site","alias":"status_qa-transfer_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.qaTransferWidgetService
            .qaTransferWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_qa_transfer" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_qa_transfer'],
                    sortKey: "status_qa_transfer",
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
