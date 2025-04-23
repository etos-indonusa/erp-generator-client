import { Component, Input, SimpleChanges } from '@angular/core';
import { PurGrnWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-pur-grn-share-widget',
    templateUrl: './pur-grn-share-widget.component.html',
    styleUrl: './pur-grn-share-widget.component.scss'
})
export class PurGrnShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private purGrnWidgetService: PurGrnWidgetService,
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
    //[{"type":"count","field":"status_pur-grn_site","alias":"total"}, {"type":"max","field":"status_pur-grn_site","alias":"status_pur-grn_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.purGrnWidgetService
            .purGrnWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_pur_grn" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_pur_grn'],
                    sortKey: "status_pur_grn",
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
