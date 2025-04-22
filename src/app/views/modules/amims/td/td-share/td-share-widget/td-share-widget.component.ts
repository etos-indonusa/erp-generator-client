import { Component, Input, SimpleChanges } from '@angular/core';
import { TdWidgetService } from 'de-sdk-core/services/td-widget.service';

@Component({
    selector: 'app-td-share-widget',
    templateUrl: './td-share-widget.component.html',
    styleUrl: './td-share-widget.component.scss'
})
export class TdShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private tdWidgetService: TdWidgetService,
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
    //[{"type":"count","field":"status_td_site","alias":"total"}, {"type":"max","field":"status_td_site","alias":"status_td_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.tdWidgetService
            .tdWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_td" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_td'],
                    sortKey: "status_td",
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
