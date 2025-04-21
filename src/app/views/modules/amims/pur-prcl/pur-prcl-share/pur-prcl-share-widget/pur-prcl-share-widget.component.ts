import { Component, Input, SimpleChanges } from '@angular/core';
import { PurPrclWidgetService } from 'src/sdk/core/services/pur-prcl-widget.service';

@Component({
    selector: 'app-pur-prcl-share-widget',
    templateUrl: './pur-prcl-share-widget.component.html',
    styleUrl: './pur-prcl-share-widget.component.scss'
})
export class PurPrclShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private purPrclWidgetService: PurPrclWidgetService,
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
    //[{"type":"count","field":"status_pur-prcl_site","alias":"total"}, {"type":"max","field":"status_pur-prcl_site","alias":"status_pur-prcl_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.purPrclWidgetService
            .purPrclWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_pur_prcl" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_pur_prcl'],
                    sortKey: "status_pur_prcl",
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
