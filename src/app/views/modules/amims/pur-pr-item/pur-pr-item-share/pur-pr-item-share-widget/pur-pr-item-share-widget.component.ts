import { Component, Input, SimpleChanges } from '@angular/core';
import { PurPrItemWidgetService } from 'src/sdk/core/services/pur-pr-item-widget.service';

@Component({
    selector: 'app-pur-pr-item-share-widget',
    templateUrl: './pur-pr-item-share-widget.component.html',
    styleUrl: './pur-pr-item-share-widget.component.scss'
})
export class PurPrItemShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private purPrItemWidgetService: PurPrItemWidgetService,
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
    //[{"type":"count","field":"status_pur-pr-item_site","alias":"total"}, {"type":"max","field":"status_pur-pr-item_site","alias":"status_pur-pr-item_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.purPrItemWidgetService
            .purPrItemWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_pur_pr_item" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_pur_pr_item'],
                    sortKey: "status_pur_pr_item",
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
