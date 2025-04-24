import { Component, Input, SimpleChanges } from '@angular/core';
import { PurReturnWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-pur-return-share-widget',
    templateUrl: './pur-return-share-widget.component.html',
    styleUrl: './pur-return-share-widget.component.scss'
})
export class PurReturnShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private purReturnWidgetService: PurReturnWidgetService,
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
    //[{"type":"count","field":"status_pur-return_site","alias":"total"}, {"type":"max","field":"status_pur-return_site","alias":"status_pur-return_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.purReturnWidgetService
            .purReturnWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_pur_return" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_pur_return'],
                    sortKey: "status_pur_return",
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
