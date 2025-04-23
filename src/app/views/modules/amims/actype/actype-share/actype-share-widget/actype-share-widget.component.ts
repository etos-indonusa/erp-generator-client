import { Component, Input, SimpleChanges } from '@angular/core';
import { ActypeWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-actype-share-widget',
    templateUrl: './actype-share-widget.component.html',
    styleUrl: './actype-share-widget.component.scss'
})
export class ActypeShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private actypeWidgetService: ActypeWidgetService,
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
    //[{"type":"count","field":"status_actype_site","alias":"total"}, {"type":"max","field":"status_actype_site","alias":"status_actype_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.actypeWidgetService
            .actypeWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_actype" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_actype'],
                    sortKey: "status_actype",
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
