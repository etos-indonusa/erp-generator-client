import { Component, Input, SimpleChanges } from '@angular/core';
import { TdRefWidgetService } from 'de-sdk-core/lib/services/td-ref-widget.service';

@Component({
    selector: 'app-td-ref-share-widget',
    templateUrl: './td-ref-share-widget.component.html',
    styleUrl: './td-ref-share-widget.component.scss'
})
export class TdRefShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private tdRefWidgetService: TdRefWidgetService,
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
    //[{"type":"count","field":"status_td-ref_site","alias":"total"}, {"type":"max","field":"status_td-ref_site","alias":"status_td-ref_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.tdRefWidgetService
            .tdRefWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_td_ref" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_td_ref'],
                    sortKey: "status_td_ref",
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
