import { Component, Input, SimpleChanges } from '@angular/core';
import { TdTypeWidgetService } from 'de-sdk-core/services/td-type-widget.service';

@Component({
    selector: 'app-td-type-share-widget',
    templateUrl: './td-type-share-widget.component.html',
    styleUrl: './td-type-share-widget.component.scss'
})
export class TdTypeShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private tdTypeWidgetService: TdTypeWidgetService,
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
    //[{"type":"count","field":"status_td-type_site","alias":"total"}, {"type":"max","field":"status_td-type_site","alias":"status_td-type_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.tdTypeWidgetService
            .tdTypeWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_td_type" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_td_type'],
                    sortKey: "status_td_type",
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
