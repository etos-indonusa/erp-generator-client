import { Component, Input, SimpleChanges } from '@angular/core';
import { BinWidgetService } from 'de-sdk-core/lib/services/bin-widget.service';

@Component({
    selector: 'app-bin-share-widget',
    templateUrl: './bin-share-widget.component.html',
    styleUrl: './bin-share-widget.component.scss'
})
export class BinShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private binWidgetService: BinWidgetService,
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
    //[{"type":"count","field":"status_bin_site","alias":"total"}, {"type":"max","field":"status_bin_site","alias":"status_bin_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.binWidgetService
            .binWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_bin" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_bin'],
                    sortKey: "status_bin",
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
