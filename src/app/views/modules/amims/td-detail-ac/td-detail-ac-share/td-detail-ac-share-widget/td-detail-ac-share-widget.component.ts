import { Component, Input, SimpleChanges } from '@angular/core';
import { TdDetailAcWidgetService } from 'src/sdk/core/services/td-detail-ac-widget.service';

@Component({
    selector: 'app-td-detail-ac-share-widget',
    templateUrl: './td-detail-ac-share-widget.component.html',
    styleUrl: './td-detail-ac-share-widget.component.scss'
})
export class TdDetailAcShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private tdDetailAcWidgetService: TdDetailAcWidgetService,
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
    //[{"type":"count","field":"status_td-detail-ac_site","alias":"total"}, {"type":"max","field":"status_td-detail-ac_site","alias":"status_td-detail-ac_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.tdDetailAcWidgetService
            .tdDetailAcWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_td_detail_ac" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_td_detail_ac'],
                    sortKey: "status_td_detail_ac",
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
