import { Component, Input, SimpleChanges } from '@angular/core';
import { TdDetailWidgetService } from 'de-sdk-core/lib/services/td-detail-widget.service';

@Component({
    selector: 'app-td-detail-share-widget',
    templateUrl: './td-detail-share-widget.component.html',
    styleUrl: './td-detail-share-widget.component.scss'
})
export class TdDetailShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private tdDetailWidgetService: TdDetailWidgetService,
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
    //[{"type":"count","field":"status_td-detail_site","alias":"total"}, {"type":"max","field":"status_td-detail_site","alias":"status_td-detail_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.tdDetailWidgetService
            .tdDetailWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_td_detail" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_td_detail'],
                    sortKey: "status_td_detail",
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
